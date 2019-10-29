function setup() {
  createCanvas(800, 800, WEBGL);
	rotationZ = 0.3
	rotationX = 0.3
	rotationY = 0.3
}

function draw() {
	frameRate(10);
  background(51);
  rotateZ(radians(rotationZ));
  rotateX(radians(rotationX));
  rotateY(radians(rotationY));
  box(200, 200, 200);
}