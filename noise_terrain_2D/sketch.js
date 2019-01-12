// EXAMPLE FROM: 
// https://www.youtube.com/watch?v=ikwNrFvnL3g
// https://youtu.be/y7sgcFhk6ZM?t=513
var inc = 0.02;
var cellSize = 10;
var xoff = 0.0;
var yoff = 0.0;
var cells = [];
var biomes = [];
var biomeTest;
function setup() {
  //Code here
  //createCanvas(2170, 1020);
  createCanvas(1800, 920);
	background(51);

	biomes.push({lowest:-20, highest:120, inc:0.05, name:'Plants'});
	biomes.push({lowest: 0, highest:130, inc:0.05, name:'Mountains'});
	biomes.push({lowest:-20, highest:40, inc:0.05, name:'Islands'});
	biomes.push({lowest: -10, highest:20, inc:0.05, name:'Ocean'});
	biomes.push({lowest: 45, highest:120, inc:0.05, name:'Terra'});
	biomes.push({lowest: 80, highest:110, inc:0.05, name:'Snow'});
	biomes.push({lowest: 20, highest:50, inc:0.05, name:'Sabana'});
	biomes.push({lowest:-20, highest:70, inc:0.05, name:'Continents'});
	biomes.push({lowest:-20, highest:60, inc:0.03, name:'Large Coasts'});
	biomes.push({lowest:-70, highest:70, inc:0.05, name:'Deeper Islands'});
	biomes.push({lowest: 90, highest:120, inc:0.05, name:'Glaciar'});
	biomeTest = -1;
	//biomeTest = biomes.length - 1;
	generateTerrain();
	drawTerrain();
}

function generateTerrain() {
	//Select a biome randomly
	var selectBiome = Math.round(random(biomes.length - 1)); // returns 0,1,2 ... N
	
	if (biomeTest >= 0) {
		selectBiome = biomeTest;
	}

	console.log(biomes[selectBiome].name);
	xoff = 0;
	for (var x = 0; x < width/cellSize; x++) {
		cells[x] = [];
		yoff = 0;
		for (var y = 0; y < height/cellSize; y++) {
			var randomNoise = map(noise(xoff, yoff), 0, 1, biomes[selectBiome].lowest, biomes[selectBiome].highest);
			var typeLevel = Math.ceil(randomNoise / 10);

			cells[x][y] = new Cell({x:x, y:y,size:cellSize,typeLevel:typeLevel});
			
			yoff += biomes[selectBiome].inc;
		}
		xoff += biomes[selectBiome].inc;
	}
}

function drawTerrain() {
	for (var x = 0; x < width/cellSize; x++) {
		for (var y = 0; y < height/cellSize; y++) {
			cells[x][y].show();
		}
	}
}