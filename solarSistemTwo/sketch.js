var radius = 50;
var angle = 0;

var sunConfig = {};
var sun = new Sun(sunConfig);

var earthConfig = {
  radius: 20,
  color: {r:255,g:255,b:200},
  orbitSpeed: 0.008,
  orbitRadius: 120,
  orbitColor: {r:255,g:255,b:255, a:50},
  showOrbit: true
};
var earth = new Planet(earthConfig);

var marsConfig = {
  radius: 15,
  color: {r:255,g:255,b:220},
  orbitSpeed: 0.004,
  orbitRadius: 260,
  orbitColor: {r:255,g:255,b:255, a:50},
  showOrbit: true
};;
var mars = new Planet(marsConfig);


function setup() {
	createCanvas(600, 600);
  background(51);
	translate(width /2, height/2);
}

function draw() {
	background(51);
	translate(width /2, height/2);
	
	sun.show();

	earth.update();
	earth.show();

	mars.update();
	mars.show();
}