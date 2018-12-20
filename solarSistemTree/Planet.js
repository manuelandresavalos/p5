class Planet {
  constructor(options) {
  	//Default values
    let defaults = {
      radius: 15,
      color: {r:255,g:255,b:255},
      angle: 0,
      orbitSpeed: 0.01,
      orbitRadius: 120, 
      orbitColor: {r:255,g:255,b:255, a:50},
      showOrbit: true
    };

    this.radius = options.radius || defaults.radius;
    this.color = options.color || defaults.color;
    this.angle = options.angle || defaults.angle;
    this.orbitSpeed = options.orbitSpeed || defaults.orbitSpeed;
    this.orbitRadius = options.orbitRadius || defaults.orbitRadius;
    this.orbitColor = options.orbitColor || defaults.orbitColor;
    this.showOrbit = options.showOrbit || defaults.showOrbit;
  }

  update(){
    this.x = (this.orbitRadius) * cos(this.angle);
    this.y = (this.orbitRadius) * sin(this.angle);
    this.angle += this.orbitSpeed;
  }

  show(){
    if (this.showOrbit) {
      this.drawOrbit();
    }

    noStroke();
    fill(this.color.r, this.color.g, this.color.b);
    ellipse(this.x, this.y, this.radius);
    noFill();

  }

  drawOrbit(){
    stroke(this.orbitColor.r, this.orbitColor.g, this.orbitColor.b, this.orbitColor.a);
    noFill();
    ellipse(0, 0, this.orbitRadius * 2);
  }
}