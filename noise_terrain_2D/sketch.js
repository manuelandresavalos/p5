// EXAMPLE FROM: https://www.youtube.com/watch?v=ikwNrFvnL3g
var inc = 0.05;
var cellSize = 10;
var xoff = 0.0;
var yoff = 0.0;
var cells = [];

function setup() {
  //Code here
  createCanvas(600, 600);
	background(51);
}

function draw(){
	xoff = 0;
	for (var x = 0; x < width/cellSize; x++) {
		cells[x] = [];
		yoff = 0;
		for (var y = 0; y < height/cellSize; y++) {
			var randomNoise = map(noise(xoff, yoff), 0, 1, 0, 100);
		
			if (randomNoise >= 70) {
				cells[x][y] = new Cell({x:x, y:y,size:cellSize,type:"snow"});
			}

			if (randomNoise < 70 && randomNoise >= 60) {
				cells[x][y] = new Cell({x:x, y:y,size:cellSize,type:"mount_top"});
			}

			if (randomNoise < 60 && randomNoise >= 50) {
				cells[x][y] = new Cell({x:x, y:y,size:cellSize,type:"mount_base"});
			}

			if (randomNoise < 50 && randomNoise >= 40) {
				cells[x][y] = new Cell({x:x, y:y,size:cellSize,type:"grass"});
			}

			if (randomNoise < 40 && randomNoise >= 30) {
				cells[x][y] = new Cell({x:x, y:y,size:cellSize,type:"desert"});
			}

			if (randomNoise < 30) {
				cells[x][y] = new Cell({x:x, y:y,size:cellSize,type:"water"});
			}
			yoff += inc;	
		}
		xoff += inc;
	}

	for (var x = 0; x < width/cellSize; x++) {
		for (var y = 0; y < height/cellSize; y++) {
			cells[x][y].show();
		}
	}
}