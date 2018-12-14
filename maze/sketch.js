let mazeConfig = {};
var maze = new Maze(mazeConfig);
var canvasWidth = 600;
var canvasHeight = 600;

function setup() {
  //Code here

  createCanvas(canvasWidth, canvasHeight);
  background(51);
}

function draw() {
	let pos = maze.center(canvasWidth, canvasHeight);
	translate(pos.x, pos.y)
  maze.show();
  noLoop();
}