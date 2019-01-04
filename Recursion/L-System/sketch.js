/*
REFERENCE: 
	The Coding Train
		Coding Challenge #16: Fractal Trees - L-System
		https://www.youtube.com/watch?v=E1B4UoSQMFw&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=19

	Wikipedia:
		Español
		https://es.wikipedia.org/wiki/Sistema-L
		
		English
		https://en.wikipedia.org/wiki/L-system

		Teselation:
		https://es.wikipedia.org/wiki/Teselaci%C3%B3n_de_Penrose
*/

/*
Variables: A B
Axiom: A
Rules: (A -> AB), (B -> A) 

// rules[0] = { a: "A", b: "ABC" };
// rules[1] = { a: "B", b: "A" };
// rules[2] = { a: "C", b: "CFF" };
*/


/*
Variables: F+-[]
Axiom: F
Rules: F -> FF+[+F-F-F]-[-F+F+F]

// rules[0] = { a: "A", b: "ABC" };
// rules[1] = { a: "B", b: "A" };
// rules[2] = { a: "C", b: "CFF" };
*/
var axiom = "F";
var sentence = axiom;
var rules = [];
var len = 100;
var angle = 0.52;
var alphaFade = 67;

rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
}

function generate() {
  var nextSentence = "";
  len *=0.5;
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence +=rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  createP(sentence);
  turlte();
}

function turlte() {
	background(51);
  resetMatrix();
	translate(width / 2, height);
  stroke(255, alphaFade);
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
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

function setup() {
  //Canvas
  createCanvas(600, 600);
  background(51);

  //Create a P html element and print axiom
  createP(axiom);

  //draw with instructions.
  turlte();

  // Create a button and added mousePressed event and trigger generate
  var button = createButton("generate");
  button.mousePressed(generate);
}