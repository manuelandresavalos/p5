var zoom = 300;

function setup() {
  //Code here
  background(51);
  createCanvas(600, 600);
}

function draw() {
  //Code here
  background(51);
  drawCircle(width / 2, height / 2, zoom);


  //controls:
  if (keyIsPressed === true) {

    if (keyCode === UP_ARROW) {
      if (zoom < 1000) {	
      	zoom += 10;
      }
    } else if (keyCode === DOWN_ARROW) {
    	if (zoom > 100) {	
      	zoom -= 10;
    	}
    }
  }
}

function drawCircle(x, y, d) {
  stroke(255);
  noFill();
  ellipse(x, y, d);

  if (d > 5) { // Exit recursion condition
    drawCircle(x + (d / 2), y, d / 2);
    drawCircle(x - (d / 2), y, d / 2);
    drawCircle(x, y + (d / 2), d / 2);
  }
}

function keyPressed() {

}