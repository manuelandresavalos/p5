var len = 80;
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
  translateX = 300;
  translateY = height-10;

  // Pentaplexity and anothers cool L Systems and its rules!
  //http://paulbourke.net/fractals/lsys/
  var LSystemConfig = {
    variables: "LR+-", /*The Alfabet that use this L System*/
    axiom: "L", /*Starting from gere*/
    rules:[ /*List of rules*/
      {when: "L", replace_with: "L+R++R-L--LL-R+"},
      {when: "R", replace_with: "-L+RR++R+L--L-R"}
    ]
  };

  //{when: "A", replace_with: "A-B--B+A++AA+B-"},
  //{when: "B", replace_with: "+A-BB--B-A++A+B"},
  LSystemInstance = new LSystem(LSystemConfig);
 
  createP("");
  var button = createButton("generate");
  button.mousePressed(nextGeneration);
}

function nextGeneration() {
  if (generation < maxGeneration) {
    gen = LSystemInstance.generate(generation);
    turlte(gen)
    createP(gen);
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
    if (current == "F" || current == "L" || current == "R") {
      line(0, 0, len, 0);
      translate(len, 0);
    } else if (current == "+") {
      rotate(-angle);
    } else if (current == "-") {
      rotate(angle);
    } else if (current == "|") {
      rotate(radians(180));
    } 
  }
  len *=0.3;
}