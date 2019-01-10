function setup() {
  //Canvas
  createCanvas(600, 600);
  background(51);
  translateX = 380;
  translateY = height-20;

  //translateX = 300;
  //translateY = height/2;

  // Pentaplexity and anothers cool L Systems and its rules!
  //http://paulbourke.net/fractals/lsys/
  var LSystemConfig = {
    variables: "LR+-", /*The Alfabet that use this L System*/
    axiom: "L", /*Starting from gere*/
    rules:[ /*List of rules*/
      {when: "L", replace_with: "L+R++R-L--LL-R+"},
      {when: "R", replace_with: "-L+RR++R+L--L-R"}
    ],
    angle: 60,
    generations: 4,
    colorLine: 255,
    strokeWeight: 4,
    len: 10
  };

  translate(translateX,translateY)
  var LSystemInstance = new LSystem(LSystemConfig);
  //Generate
  LSystemInstance.generate();

  //Change gen
  /*var gen = LSystemInstance.gen;
  var part = gen.length / 3;
  var newGen1 = gen.substring(0, part);
  var newGen2 = gen.substring(part, part*2);
  var newGen3 = gen.substring(part*2, part*3);
  newGen2 = newGen2.replace(/L/gi, "f");
  LSystemInstance.gen = newGen1+newGen2+newGen3;
  console.log(LSystemInstance.gen);
  */
  //Draw Gen
  //LSystemInstance.gen = 'FfF+FfFf@f@f@f#@@f#@@f#@@+f!@@f!@@f!@@f!@@f!@@f!@@'
  LSystemInstance.turlte();
}