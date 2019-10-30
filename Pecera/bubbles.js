class Bubbles {
    constructor(){
        this.radius = random(2, 10);
        this.color = {r:204,g:229,b:255}

        this.location = createVector(random(0,width),random(height, height * 2));
        this.velocity = createVector();
        this.acceleration = createVector();
        this.mass = 1;
        this.maxVelocity = 0.9;
    }

    show() {
        push() // start changing attributes
        noStroke();
        fill(this.color.r, this.color.g, this.color.b, this.radius*10);
        circle(this.location.x, this.location.y, this.radius);
        //rectMode(CENTER)
        //rect(0,0, 25, 10)
        pop() // put all attributes by default again
    }

    update() {
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        this.acceleration.mult(0)
        this.velocity.limit(this.maxVelocity);
    }

    applyForce(force){
        //Apply mass calculation!
        var f = force.div(this.mass);
        this.acceleration.add(f);
    }

    edgesInfinite(){
        if (this.location.x >= width+this.radius) {
            this.location.mult(0);
            this.location.x = -this.radius;
        }
        if (this.location.x < -this.radius) {
            this.location.mult(0);
            this.location.x = width+this.radius;
        }

        if (this.location.y < -this.radius) {
            this.location.mult(0);
            this.location.y = height+this.radius;
        }
    }
}