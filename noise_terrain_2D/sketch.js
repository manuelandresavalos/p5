// EXAMPLE FROM: https://www.youtube.com/watch?v=ikwNrFvnL3g
var inc = 0.05;
var cellSize = 10;
var xoff = 0.0;
var yoff = 0.0;
var cells = [];

function setup() {
  //Code here
  createCanvas(2170, 1020);
	background(51);

	generateTerrain();
	drawTerrain();
}

function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}

function draw(){

}

function generateTerrain() {
	xoff = 0;
	for (var x = 0; x < width/cellSize; x++) {
		cells[x] = [];
		yoff = 0;
		for (var y = 0; y < height/cellSize; y++) {
			var randomNoise = map(noise(xoff, yoff), 0, 1, 0, 100);
		
			if (inRange(randomNoise, 70, 100)) {
				cells[x][y] = new Cell({x:x, y:y,size:cellSize,type:"snow"});
			} else if (inRange(randomNoise, 65, 70)) {
				cells[x][y] = new Cell({x:x, y:y,size:cellSize,type:"mount_top"});
			} else if (inRange(randomNoise, 60, 65)) {
				cells[x][y] = new Cell({x:x, y:y,size:cellSize,type:"mount_middle"});
			} else if (inRange(randomNoise, 50, 60)) {
				cells[x][y] = new Cell({x:x, y:y,size:cellSize,type:"mount_base"});
			} else if (inRange(randomNoise, 35, 50)) {
				cells[x][y] = new Cell({x:x, y:y,size:cellSize,type:"grass"});
			} else if (inRange(randomNoise, 30, 35)) {
				cells[x][y] = new Cell({x:x, y:y,size:cellSize,type:"desert"});
			} else if (inRange(randomNoise, 20, 30)) {
				cells[x][y] = new Cell({x:x, y:y,size:cellSize,type:"water"});
			} else if (inRange(randomNoise, 0, 20)) {
				cells[x][y] = new Cell({x:x, y:y,size:cellSize,type:"water_deeper"});
			}
			yoff += inc;	
		}
		xoff += inc;
	}
}

function drawTerrain() {
	for (var x = 0; x < width/cellSize; x++) {
		for (var y = 0; y < height/cellSize; y++) {
			cells[x][y].show();
		}
	}
}