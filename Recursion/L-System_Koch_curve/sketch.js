var len = 100;
var alphaFade = 67;
var LSystemInstance;
var generation = 1;
var gen = '';
var angle = 90;

function setup() {
  //Canvas
  createCanvas(600, 600);
  background(51);
  angle = radians(angle);

  var LSystemConfig = {
    axiom: "F", /*Variable*/
    sentence: "F",
    rules:[
      {a: "F", b: " F+F-F-F+F"}
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
    turlte(gen)
    generation++;
  } else {
    createP("Finish");
  }
}

function turlte(gen) {
  background(51);
  resetMatrix();
  translate(10, height-10);
  stroke(255, alphaFade);
  
  for (var i = 0; i < gen.length; i++) {
    var current = gen.charAt(i);
    if (current == "F") {
      line(0, 0, len, 0);
      translate(len, 0);
    } else if (current == "+") {
      rotate(-angle);
    } else if (current == "-") {
      rotate(angle);
    } 
  }
  len *=0.3;
}