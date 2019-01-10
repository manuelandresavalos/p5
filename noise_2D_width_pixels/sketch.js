// EXAMPLE FROM: https://www.youtube.com/watch?v=ikwNrFvnL3g
var inc = 0.005;
var xoff = 0.0;
var yoff = 0.0;

function setup() {
  //Code here
  createCanvas(600, 600);
	background(51);
}

function draw(){
	background(51);	
	var yoff = 0;
  loadPixels();
  for (var y = 0; y < height; y++) {
  	var xoff = 0;
  	for (var x = 0; x < width; x++) {
  		var index = (x + y * width) * 4; // ver que hace esto.
  		var randomNoise = noise(xoff, yoff) * 255;
  		pixels[index + 0] = randomNoise;
  		pixels[index + 1] = randomNoise;
  		pixels[index + 2] = randomNoise;
  		pixels[index + 3] = 255;

  		xoff += inc;
  	}
  	yoff += inc;
  }
  updatePixels();
}