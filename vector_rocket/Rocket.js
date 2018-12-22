class Rocket {
  constructor(options = {}) {
    //Default values
    let defaults = {
      pos: createVector(),
      vel: createVector(),
      acc: createVector(),
      width: 10,
      heigh: 30,
      world: {
        gravity: 0.0
      }
    };

    this.pos = options.pos || defaults.pos;
    this.vel = options.vel || defaults.vel;
    this.acc = options.acc || defaults.acc;
    this.width = options.width || defaults.width;
    this.heigh = options.heigh || defaults.heigh;
    this.world = options.world || defaults.world;

    this.showFire = false;
    this.parts = {
      body:{},
      fire:{}
    }
  }
  
  applyForce(force){
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.add(0, 0);
  }

  show() {
    this.center();
    this.drawBody();
    this.drawFire();
  }

  center() {
    translate(width / 2, height / 2);
  }



  drawBody() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());

    noStroke();
    fill(255);
    rect(0, 0, this.width, this.heigh);

    fill(255, 0, 0);
    stroke(100)
    rect(0, 0, 5, 5);
    pop();
  }

  drawFire() {
    if (this.showFire) {
      var v1 = createVector(this.pos.x, this.pos.y + this.heigh);
      var v2 = createVector(this.pos.x + this.width, this.pos.y + this.heigh);
      var v3 = createVector(this.pos.x + (this.width / 2), this.pos.y + (this.heigh + this.heigh / 2));

      fill(255, 0, 0);
      triangle(v1.x, v1.y, v2.x, v2.y, v3.x, v3.y);
    }
  }
}