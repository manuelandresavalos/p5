var xoff = 0.0;
var noiseX;
var cells = [];
var dots = [];
var cellSize = 10;
var detailOfNoise = 2; // 1 little noise -> 10 a lot of noise.

function setup() {
  //Code here
  createCanvas(600, 600);
  background(51);
  stroke(255);
  generateTerrain();
  showTerrain();
}


function generateTerrain() {
  noStroke();
  let cantCells = (width/cellSize);
	for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
  		if (cantCells > x && cantCells > y) {
  			cells.push(new Cell({size:cellSize,x: x, y: y}));
  		}
    }

    noiseDetail(detailOfNoise, 0.5);
    xoff = xoff + 0.01;
    noiseX = Math.ceil(noise(xoff) * width);
    dots.push({x:x, y:noiseX});
  }

  for (var cellIndex = 0; cellIndex < cells.length; cellIndex++) {
    for (var dotsIndex = 0; dotsIndex < dots.length; dotsIndex++) {
      if (dots[dotsIndex].x >= cells[cellIndex].x) {
        if (dots[dotsIndex].x <= cells[cellIndex].x*cells[cellIndex].size) {
          if (dots[dotsIndex].y >= cells[cellIndex].y) {
            if (dots[dotsIndex].y <= cells[cellIndex].y*cells[cellIndex].size) {
              cells[cellIndex].type = "mount";
            } else {
              cells[cellIndex].type = "grass";
            }
          }
        }
      }
    }
  }
}

function showTerrain(){
  for (cell of cells) {
    stroke(51)
    cell.show();
  }

  for (dot of dots) {
    stroke(255);
    point(dot.x, dot.y);
  }
}