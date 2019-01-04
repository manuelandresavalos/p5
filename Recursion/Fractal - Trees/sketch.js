var angle = 0;
var leftFactorLeng = 0.69;
var rightFactorLeng = 0.69;
var startTrunkLeng = 100;
var trunkSlider;
var leftFactorSlider;
var rightFactorSlider;

function setup() {
  //Code here
  createCanvas(600, 600);
  background(51);

  trunkSlider = createSlider(0, 400, 100);
  trunkSlider.position(10, 10);

	leftFactorSlider = createSlider(0, 80, 67);
	leftFactorSlider.position(10, 40);
	
	rightFactorSlider = createSlider(0, 80, 67);
	rightFactorSlider.position(10, 70);

}

function draw() {
  //Code here
  startTrunkLeng = trunkSlider.value();
  leftFactorLeng = leftFactorSlider.value() / 100;
	rightFactorLeng = rightFactorSlider.value() / 100;

	// Some variables
  angle = PI / 4;
  translate(300, height);
  background(51);
	stroke(255);

	//Starting point of branching.
  branch(startTrunkLeng);
}


function branch(len) {
	line(0, 0, 0, -len);
	translate(0, -len);
	
  if (len > 4) {
  	push();
		rotate(angle);
    branch(len * leftFactorLeng);
		pop();

    push();
		rotate(-angle);
    branch(len * rightFactorLeng);
		pop();
  }
}