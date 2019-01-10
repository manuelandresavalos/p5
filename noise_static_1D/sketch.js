var xoff = 0.0;
var yoff = 0.0;

function setup() {
  //Code here
  createCanvas(600, 600);
	background(51);
  stroke(255);
  fill(255);
  strokeWeight(4);

  for (var i = 0; i < width; i++) {
  	xoff = xoff + 0.01;
  	var x = map(noise(xoff), 0, 1, 0, width);
  	ellipse(i, x, 2, 2);
  }
}