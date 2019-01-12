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

var canvasW = 600;
var canvasH = 600;

const CENTER_X = canvasW / 2 ;
const CENTER_Y = canvasH / 2 ;

function setup() {
  //Code here
  createCanvas(canvasW, canvasH);
	background(51);

	// if args [0 .. 10] return bioma selected, otherwise return a biome random
	biome = new Biomes();
	terrain = new TerrainGenerator(biome, canvasW, canvasH);
	terrain.generate();
	terrain.show();

	showTitle(biome.name+' - '+biome.index);

	createP();
	var regenerateMap = createButton("Generate");
  regenerateMap.mousePressed(regenMap);
}

function regenMap(){
	background(51);
	terrain.clear();
	biome = new Biomes();
	terrain = new TerrainGenerator(biome, canvasW, canvasH);
	terrain.start = random(1000) * 100;
	terrain.generate();
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