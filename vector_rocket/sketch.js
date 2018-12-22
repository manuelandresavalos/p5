var megaRocket;
var World = {
	gravity: 0.001
}

function setup() {
  createCanvas(600, 600);
  background(51);

  megaRocket = new Rocket({world: World});
  megaRocket.update();
  megaRocket.show();
}

function draw() {
  background(51);
  megaRocket.update();
  megaRocket.show();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    megaRocket.showFire = true;
  	//console.log("showFire = " + megaRocket.showFire);
  } else if (keyCode === RIGHT_ARROW) {
    //console.log("right");
  } else if (keyCode === DOWN_ARROW) {
    //console.log("down");
  } else if (keyCode === LEFT_ARROW) {
    //console.log("left");
  }
}

function keyReleased() {
	if (keyCode === UP_ARROW) {
    megaRocket.showFire = false;
		//console.log("showFire = " + megaRocket.showFire);
  } else if (keyCode === RIGHT_ARROW) {
    //console.log("right");
  } else if (keyCode === DOWN_ARROW) {
    //console.log("down");
  } else if (keyCode === LEFT_ARROW) {
    //console.log("left");
  }
}