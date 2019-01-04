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
var rule1 = { a: "A", b: "AB" };
var rule2 = { a: "B", b: "A" };
var sentence = axiom;

function generate() {
	var nextSentence = "";
	for (var i = 0; i < sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == rule1.a) {
			nextSentence += rule1.b;
		} else if(current == rule2.a){
			nextSentence += rule2.b;
		} else {
			nextSentence = current;
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
