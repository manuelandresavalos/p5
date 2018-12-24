var fly;
var wind;
var gravity;

function setup() {
  createCanvas(600, 600);
  background(51);

  wind = createVector(0, 0);
  gravity = createVector(0, 0.05);

  fly = new Flyer();
  fly.show();
}

function draw() {
  background(51);
  wind = createVector(0, 0);
  gravity = createVector(0, 0.05);

  showSquare();

  fly.applyForce(wind);
  fly.applyForce(gravity);
  fly.update();
  fly.checkEdges();
  fly.show();

  keyPress();
  showInfo();
}

function keyPress() {
  if (keyIsDown(UP_ARROW)) {
    fly.applyForce(createVector(0, 0.1));
  }
  if (keyIsDown(RIGHT_ARROW)) {
    fly.applyForce(createVector(-0.1, 0));
  }
  if (keyIsDown(DOWN_ARROW)) {
    fly.applyForce(createVector(0, -0.1));
  }
  if (keyIsDown(LEFT_ARROW)) {
    fly.applyForce(createVector(0.1, 0));
  }
}

function showInfo() {
  textSize(18);
  fill(200);
  text('pos = ' + fly.pos, 10, 30);
  text('vel = ' + fly.vel, 10, 60);
  text('acc = ' + fly.acc, 10, 90);
  text('mass = ' + fly.mass, 10, 120);
}

function showSquare(){
	fill(255,200,4);
  rect(width /2 - 40, height/2 - 40, 80, 80);
}