// Configure if you wish :P
let mazeConfig = {};
var maze = new Maze(mazeConfig);

// Set canvas size
var canvasWidth = 600;
var canvasHeight = 600;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(51);

	//Center the Maze on the middle of the stage
	maze.center(canvasWidth, canvasHeight);
	maze.generate();
  maze.show();

  frameRate(1);
}

function draw() {
	//Center the Maze on the middle of the stage
	maze.center(canvasWidth, canvasHeight);
		
	//Update the maze
	maze.step();
  maze.show();
}