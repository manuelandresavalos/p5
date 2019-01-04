var len = 10;
var angle = 0.52;
var alphaFade = 67;
var LSystemInstance;


function setup() {
  //Canvas
  createCanvas(600, 600);
  background(51);

  var LSystemConfig = {
    axiom: "F",
    sentence: "F",
    rules:[
      {a: "F", b: "FF+[+F-F-F]-[-F+F+F]"}
    ]
  };
  LSystemInstance = new LSystem(LSystemConfig);
  var gen = LSystemInstance.generate(4);

  //Create a P html element and print axiom
  createP(gen);

  //draw with instructions.
  turlte(gen);
}

function turlte(gen) {
  background(51);
  resetMatrix();
  translate(width / 2, height);
  stroke(255, alphaFade);
  for (var i = 0; i < gen.length; i++) {
    var current = gen.charAt(i);
    if (current == "F") {
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (current == "+") {
      rotate(angle);
    } else if (current == "-") {
      rotate(-angle);
    } else if (current == "[") {
      push();
    } else if (current == "]") {
      pop();
    }
  }
}