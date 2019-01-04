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
*/

var axiom = "A";
var sentence = axiom;
var rules = [];
rules[0] = { a: "A", b: "AB" };
rules[1] = { a: "B", b: "A" };

function generate() {
	var nextSentence = "";
	for (var i = 0; i < sentence.length; i++) {
		var current = sentence.charAt(i);
		var found = false;
		for (var j = 0; j < rules.length; j++) {
			if (current == rules[j].a) {
				nextSentence += rules[j].b;
				break;
			} 
		}
		if (!found) {
			nextSentence += current;
		}
	}
	sentence = nextSentence;
	createP(sentence);
}

function setup() {
  //Code here
  noCanvas();
  createP(axiom);
  var button = createButton("generate");
  button.mousePressed(generate);
}

function draw() {
	//Code here
}
