var sun = new Star(0,0, 100);
var planets = new Array(5);
var direction = 1; // 1 = clock or -1 = outerclock
let orbitSpeed = 0.004;

function setup() {
  //Create canvas
  createCanvas(600, 600);
  
  //Change the background color of canvas
  background(51);
  
  //Change the cordenates to the center of canvas
  translate(width /2, height/2);
  
  //Set the frame rate to 5 cicles per second.
  frameRate(60);
  
  // Show Sun.
  sun.show();
  
  for (var i = 0; i < planets.length; i++) {
    var distance = random(110, 300);
    var radius = random(30, 60);
    var orbitSpeed = random(0.001, 0.01);
    var angle = radians(random(0.0, 360.0));
    
    planets[i] = new Planet(distance, angle, radius, orbitSpeed);
  }
  
  for (var i = 0; i < planets.length; i++) {
    planets[i].show();
  }
}

function draw() {
  //Clean the canvas put in the background color again
  background(51);
  
  //Change the cordenates to the center of canvas again
  translate(width /2, height/2);
  
  // Show Sun again
  sun.show();
  
  // rotate the planets
  for (var i = 0; i < planets.length; i++) {
    rotate(0);
    
    planets[i].angle += planets[i].orbitSpeed;
    rotate(planets[i].angle);
    
    planets[i].show();
  }
  //console.log("test")
  //noLoop();
}