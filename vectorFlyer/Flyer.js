class Flyer {
  constructor() {
    this.pos = createVector(width / 2 , width / 2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = 1;
  }

  applyForce(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

	update() {
		/*pos(x, y); vel = x + 1;	acc = x * 0.1;*/
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    fill(255, 0, 0);
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }

  checkEdges() {
    if (this.pos.x > width) {
      this.vel.x -= 1;
      this.vel.x *= -1;
      this.pos.x = width;
    } else if (this.pos.x < 0) {
    	this.vel.x += 1;
      this.vel.x *= -1;
      this.pos.x = 0;
    }

    if (this.pos.y > height) {
      //this.vel.y -= 1; // quito velocidad con cada rebote.
      this.vel.y *= -1; // cambio la dirección en cada rebote.
      this.pos.y = height; // seteo la pos.y al alto del escenario para que la bola no se valla.
    } else if(this.pos.y < 0) {
    	//this.vel.y += 1; // quito velocidad con cada rebote.
      this.vel.y *= -1; // cambio la dirección en cada rebote.
      this.pos.y = 0; // seteo la pos.y al alto del escenario para que la bola no se valla.
    }
  }
}