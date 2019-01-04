var xoff = 0.0;
var noiseX;

function setup() {
  //Code here
  createCanvas(600, 600);
  background(51);

  stroke(255);
  for (var row = 0; row < height; row++) {
    xoff = xoff + 0.01;
    noiseX = noise(xoff) * width;
    point(row, noiseX);
  }
}

function graphNoise(){
  for (var row = 0; row < height; row++) {
    xoff = xoff + 0.01;
    noiseX = noise(xoff) * width;
    point(row, noiseX);
  }
}

function draw(){
  background(51);
  graphNoise();
  frameRate(1);
}
