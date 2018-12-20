//Declare the SUN
var sunConfig = {};
var sun = new Sun(sunConfig);

//Count Planets
var countPlanets = 8;

//Container of Planets
var planets = [];
var minDistanceOrbit = 60;
var maxDistanceOrbit = 350;

var stackRadius = []; //FIFO
var stackOrbitSpeed = []; //FIFO
var stackOrbitRadius = []; //FIFO

function setup() {
	createCanvas(600, 600);
  background(51);
	translate(width /2, height/2);
  
  //Show Sun
  sun.show();

  //Generate Planets
  for (var i = 0; i < countPlanets; i++) {
    var angle = getRandomInt(0, 360);
    var radius = (getRandomInt(15, 40));

    var orbitRadius = (maxDistanceOrbit / countPlanets);
    orbitRadius = orbitRadius * (i + 1);

    var orbitSpeed = 0.50;
    orbitSpeed = orbitSpeed / ((i+1)*7);


    stackRadius.push(radius);
    stackOrbitRadius.push(orbitRadius);
    stackOrbitSpeed.push(orbitSpeed);

    let planetConfig = {
      angle: angle,
      radius: stackRadius[i],
      orbitRadius: stackOrbitRadius[i],
      orbitSpeed: stackOrbitSpeed[i],
    }

    planets.push(new Planet(planetConfig));
  }
}

function draw() {
	background(51);
	translate(width /2, height/2);

  //Show Sun
  sun.show();

  //Update and show Planets
  for (var i = 0; i < planets.length; i++) {
    planets[i].update();
    planets[i].show();
  }
}