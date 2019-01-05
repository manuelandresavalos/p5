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

class LSystem {
  constructor(options) {
    if (!options.axiom || !options.variables || !options.rules) {
      alert("We need configuration!");
    } else {
      // Start from here
      this.axiom = options.axiom;
      this.variables = options.variables;
      this.rules = options.rules;
    }
  }

  generate(generation) {
    var nextSentence = "";
    for (var i = 0; i < this.axiom.length; i++) {
      var current = this.axiom.charAt(i);
      var found = false;
      for (var j = 0; j < this.rules.length; j++) {
        if (current == this.rules[j].when) {
          found = true;
          nextSentence +=this.rules[j].replace_with;
          break;
        }
      }
      if (!found) {
        nextSentence += current;
      }
    }
    this.axiom = nextSentence;

    generation--;
    if (generation >= 1) {
      return this.generate(generation)
    } else {
      return this.axiom;
    }
  }
}