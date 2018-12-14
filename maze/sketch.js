// Configure if you wish :P
let mazeConfig = {};
var maze = new Maze(mazeConfig);

// Set canvas size
var canvasWidth = 600;
var canvasHeight = 600;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(51);
}

function draw() {
	//Center the Maze on the middle of the stage
	let pos = maze.center(canvasWidth, canvasHeight);
	translate(pos.x, pos.y)

	// Show Maze
  maze.show();
  noLoop();
}