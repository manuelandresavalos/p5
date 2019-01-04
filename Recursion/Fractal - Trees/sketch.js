var angle = 0;
var leftFactorLeng = 0.69;
var rightFactorLeng = 0.69;
var startTrunkLeng = 100;
var randomizer = 0;
var randomizerFactor;

var angleSlider;
var trunkSlider;
var leftFactorSlider;
var rightFactorSlider;
var randomizerSlider;

function setup() {
  //Code here
  createCanvas(600, 600);
  background(51);

  trunkSlider = createSlider(0, 400, 100);
  trunkSlider.position(10, 10);

	leftFactorSlider = createSlider(0, 75, 67);
	leftFactorSlider.position(10, 40);
	
	rightFactorSlider = createSlider(0, 75, 67);
	rightFactorSlider.position(10, 70);

  angleSlider = createSlider(0, PI / 2, 0.37, 0.01);
  angleSlider.position(10, 100);

  randomizerSlider = createSlider(0, 1, 0,1);
  randomizerSlider.position(10, 130);
  randomizerFactor = random(-0.05, 0.05);

}

function draw() {
  //Code here
  startTrunkLeng = trunkSlider.value();
  leftFactorLeng = leftFactorSlider.value() / 100;
	rightFactorLeng = rightFactorSlider.value() / 100;
  angle = angleSlider.value();
  randomizer = randomizerSlider.value();

	// Some variables
  translate(300, height);
  background(51);
	stroke(255);

	//Starting point of branching.
  branch(startTrunkLeng);
}


function branch(len) {
  if (len < 10) {
    //fill(127,255,0);
    //fill(124,252,0);
    fill(50,205,50);
    noStroke();
    ellipse(0, 0, 5, 5);
    noFill();
  } else {
  	line(0, 0, 0, -len);
  }
	translate(0, -len);
	
  if (len > 4) {
  	push();
    if (randomizerSlider) {}
    if (randomizer) {
      angle = angle + randomizerFactor;
    }
		rotate(angle);
    branch(len * leftFactorLeng);
		pop();

    push();
    if (randomizer) {
      angle = angle + randomizerFactor;
    }
		rotate(-angle);
    branch(len * rightFactorLeng);
		pop();
  }
}