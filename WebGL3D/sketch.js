var rotate;

function setup() {
  createCanvas(800, 800, WEBGL);
  rotate = 1;
}

function draw() {
  background(51);
	//translate(-width/8,-height/8, 400); //moves our drawing origin to the top left corner
  //box();

  if (rotate === 1) {
    rotateX(frameCount * 0.01); // rotateX rota todo el canvas entero, no solo un elemento
    rotateY(frameCount * 0.01); // rotateY rota todo el canvas entero, no solo un elemento
  }

  fill(255,0,255)
  box(150, 150, 150);
  //console.log("frameCount= ", frameCount);

  fill(255,0,0)
  translate(150,150)
  box(30);

  fill(255,255,0)
  translate(-300,-300)
  box(30);
}