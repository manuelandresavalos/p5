// Configure if you wish :P
let mazeConfig = {
	cols: 20,
	rows: 20,
	cellSize: 20
};
var maze = new Maze(mazeConfig);

// Set canvas size
var canvasWidth = 1200;
var canvasHeight = 800;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  //createCanvas(canvasWidth, canvasHeight);
  background(51);

	//Center the Maze on the middle of the stage
	maze.center(canvasWidth, canvasHeight); //<- fix this
	maze.generate();
	maze.step();
  maze.show();

  //frameRate(5);
}

function draw() {
	//Center the Maze on the middle of the stage
	maze.center(canvasWidth, canvasHeight);
	background(51);

	maze.step();
	maze.show();

	if (maze.done) {
		console.log("DONE!");
		noLoop();
	}
}