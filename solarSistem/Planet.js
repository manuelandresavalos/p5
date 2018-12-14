class Planet {
  constructor(distance, angle, radius, orbitSpeed) {
    this.distance = distance;
    this.radius = radius;
    this.angle = angle;
    this.orbitSpeed = orbitSpeed;
    this.rotationSpeed = 0.01;
  }

  show(){
    fill(255,255,255);
    //sphere(40, 150,150);
    ellipse(this.distance, 0, this.radius);
    ellipse(this.distance+15, 0, 10);
  }
}