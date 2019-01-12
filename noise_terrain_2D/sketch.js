// EXAMPLE FROM: 
// https://www.youtube.com/watch?v=ikwNrFvnL3g
// https://youtu.be/y7sgcFhk6ZM?t=513
var inc = 0.02;
var cellSize = 10;
var xoff = 0.0;
var yoff = 0.0;
var cells = [];
var biome;
var terrain;

var canvasW = 1800;
var canvasH = 920;

const CENTER_X = canvasW / 2 ;
const CENTER_Y = canvasH / 2 ;

function setup() {
  //Code here
  //createCanvas(2170, 1020);
  createCanvas(canvasW, canvasH);
	background(51);

	biome = new Biomes(); // if arguments exist (0 to 10) get the biome selected, if args is empty the biome is selected Randomly
	terrain = new TerrainGenerator(biome, canvasW, canvasH);
	terrain.generate()
	terrain.show();

	showTitle(biome.name+' - '+biome.index);
}


function showTitle(title) {
	var tsize = 14;

	fill(255);
	noStroke();
	rect(10, 10, 128, 19);
	
	fill(0);
	textSize(tsize);
	text(title, 15, 25);
}