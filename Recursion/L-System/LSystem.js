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

    //Examples
    http://paulbourke.net/fractals/lsys/
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
Character        Meaning
   F           Move forward by line length drawing a line
   f           Move forward by line length without drawing a line
   +           Turn left by turning angle
   -           Turn right by turning angle
   |           Reverse direction (ie: turn by 180 degrees)
   [           Push current drawing state onto stack
   ]           Pop current drawing state from the stack
   #           Increment the line width by line width increment
   !           Decrement the line width by line width increment
   @           Draw a dot with line width radius
   {           Open a polygon
   }           Close a polygon and fill it with fill colour
   >           Multiply the line length by the line length scale factor
   <           Divide the line length by the line length scale factor
   &           Swap the meaning of + and -
   (           Decrement turning angle by turning angle increment
   )           Increment turning angle by turning angle increment
*/
class LSystem {
  constructor(options) {
    let defaults = {
      variables: "LR+-",
      axiom: "L",
      rules: [ /*List of rules*/
        {when: "L", replace_with: "L+R++R-L--LL-R+"},
        {when: "R", replace_with: "-L+RR++R+L--L-R"}
      ],
      angle: 60,
      generations: 3,
      colorLine: 255,
      strokeWeight: 4,
      gen: "",
      len: 30
    };
    // Start from here
    this.axiom = options.axiom || defaults.axiom;
    this.variables = options.variables || defaults.variables;
    this.rules = options.rules || defaults.rules;
    this.angle = radians(options.angle) || radians(defaults.angle);
    this.generations = options.generations || defaults.generations;

    this.colorLine = options.colorLine || defaults.colorLine;
    this.strokeWeight = options.strokeWeight || defaults.strokeWeight;
    this.gen = options.gen || defaults.gen;
    this.len = options.len || defaults.len;
  }

  generate() {
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
    this.gen = nextSentence;

    this.generations--;
    if (this.generations >= 1) {
      this.generate()
    }
  }

  turlte() {
    
    for (var i = 0; i < this.gen.length; i++) {
      var current = this.gen.charAt(i);
      if (current === "F" || current === "L" || current === "R") {
        stroke(this.colorLine);
        strokeWeight(this.strokeWeight);
        line(0, 0, this.len, 0);
        translate(this.len, 0);
      } else if (current == "f") {
        translate(this.len, 0);
      } else if (current == "+") {
        rotate(-this.angle);
      } else if (current == "-") {
        rotate(this.angle);
      } else if (current == "|") {
        rotate(radians(180));
      } else if (current == "[") {
        push();
      } else if (current == "]") {
        pop();
      }
    }
  }
}