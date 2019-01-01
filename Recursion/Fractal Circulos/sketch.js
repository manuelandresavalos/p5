function setup() {
  //Code here
	background(51);
  createCanvas(600, 600);
}

function draw() {
	//Code here
	background(51);
	drawCircle(width / 2, height / 2, 300);
}

function drawCircle(x, y, d){
	stroke(255);
	noFill();
	ellipse(x, y, d);

	if (d > 5) { // Exit recursion condition
		drawCircle(x+(d/2), y, d/2);
		drawCircle(x-(d/2), y, d/2);
	}
}

