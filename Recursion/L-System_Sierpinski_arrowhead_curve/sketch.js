var len = 100;
var alphaFade = 67;
var LSystemInstance;
var generation = 1;
var gen = '';
var angle = 60;
var maxGeneration = 4;
var translateX;
var translateY;

function setup() {
  //Canvas
  createCanvas(600, 600);
  background(51);
  angle = radians(angle);
  translateX = 10;
  translateY = height - 100;

  var LSystemConfig = {
    variables: "AB+-", /*The Alfabet that use this L System*/
    axiom: "A", /*Starting from gere*/
    rules:[
      {when: "A", replace_with: "B-A-B"},
      {when: "B", replace_with: "A+B+A"},
    ]
  };
  LSystemInstance = new LSystem(LSystemConfig);
 
  createP("");
  var button = createButton("generate");
  button.mousePressed(nextGeneration);
}

function nextGeneration() {
  if (generation < maxGeneration) {
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
  translate(translateX, translateY);
  stroke(255, alphaFade);
  
  for (var i = 0; i < gen.length; i++) {
    var current = gen.charAt(i);
    if (current == "A" || current == "B") {
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