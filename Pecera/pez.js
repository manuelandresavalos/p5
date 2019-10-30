class Pez {
    constructor(model){
        this.name = model.name;
        this.mass = model.mass;
        this.maxVelocity = model.maxVelocity;
        this.color = model.color;
        this.headOrientation = model.headOrientation;
        
        this.location = createVector(random(0,width),random(0,height));
        this.velocity = createVector();
        this.acceleration = createVector();
        
        this.imgPez = imgsPeces[this.name];
        this.historyLocation;
    }

    update() {
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        this.acceleration.mult(0)
        this.velocity.limit(this.maxVelocity);
    }

    show(){
        push() // start changing attributes
        
        fill(this.color.r, this.color.g, this.color.b);
        translate(this.location.x, this.location.y); //this translate all the canvas
        imageMode(CENTER); 
        scale(this.headOrientation, 1);
        image(this.imgPez, 0, 0); // Print the image on x:0 and y:0 from translated and rotated canvas
        
        //circle(this.location.x, this.location.y, this.radius);
        //rectMode(CENTER)
        //rect(0,0, 25, 10)
        pop() // put all attributes by default again
    }

    applyForce(force){
        //Apply mass calculation!
        var f = force.div(this.mass);
        this.acceleration.add(f);
    }

    edgesBounce(){
        if (this.location.x >= width) {
            this.location.x = width;
            this.velocity.x *= -1;
            this.headOrientation = -1;
        }
        if (this.location.x <= 0) {
            this.location.x = 0;
            this.velocity.x *= -1;
            this.headOrientation = 1;
        }
        if (this.location.y >= height) {
            this.location.y = height;
            this.velocity.y *= -1;
        }
        if (this.location.y <= 0) {
            this.location.y = 0;
            this.velocity.y *= -1;
        }
    }
    
    edgesInfinite(){
        if (this.location.x >= width+this.radius) {
            this.location.mult(createVector(0,0));
            this.location.x = -this.radius;
        }
        if (this.location.x < -this.radius) {
            this.location.mult(createVector(0,0));
            this.location.x = width+this.radius;
        }
        if (this.location.y >= height+this.radius) {
            this.location.mult(createVector(0,0));
            this.location.y = -this.radius;

        }
        if (this.location.y < -this.radius) {
            this.location.mult(createVector(0,0));
            this.location.y = height+this.radius;
        }
    }

    getOrientation(){
        var actualPosX = Math.ceil(this.location.x);
        
        if (this.historyLocation == undefined){
            this.historyLocation = actualPosX;
        }
        
        if (actualPosX < this.historyLocation) {
            this.headOrientation = 1;
        } 
        if (actualPosX > this.historyLocation) {
            this.headOrientation = -1;
        }
        this.historyLocation = actualPosX;
    }

    keyboardControl(){
        if (keyIsDown(LEFT_ARROW)) {
            this.applyForce(createVector(-config.forceKeys, 0));
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.applyForce(createVector(config.forceKeys, 0));
        }

        if (keyIsDown(UP_ARROW)) {
            this.applyForce(createVector(0, -config.forceKeys));
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.applyForce(createVector(0, config.forceKeys));
        }
    }
}