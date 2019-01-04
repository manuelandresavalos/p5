var len = 100;
var alphaFade = 67;
var LSystemInstance;
var generation = 1;
var gen = '';
var angle = 120;

function setup() {
  //Canvas
  createCanvas(600, 600);
  background(51);
  angle = radians(angle);

  var LSystemConfig = {
    axiom: "pepe", /*Variable*/
    sentence: "F",
    rules:[
      {a: "F", b: "F-G+F+G-F"},
      {a: "G", b: "GG"}
    ]
  };
  LSystemInstance = new LSystem(LSystemConfig);

  //Create a P html element and print axiom
  createP(gen);

  //draw with instructions.
  turlte(gen);
  
  var button = createButton("generate");
  button.mousePressed(nextGeneration);
}

function nextGeneration() {
  if (generation < 4) {
    gen = LSystemInstance.generate(generation);
    len *=0.5;
    turlte(gen)
    generation++;
  } else {
    createP("Finish");
  }
}

function turlte(gen) {
  background(51);
  resetMatrix();
  translate(0, height);
  stroke(255, alphaFade);
  
  for (var i = 0; i < gen.length; i++) {
    var current = gen.charAt(i);
    if (current == "F" || current == "G") {
      line(0, 0, len, 0);
      translate(len, 0);
    } else if (current == "+") {
      rotate(angle);
    } else if (current == "-") {
      rotate(-angle);
    } 
  }
}