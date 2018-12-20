class Sun {
  constructor(options) {
  	//Default values
    let defaults = {
      radius: 50,
      color: {r:255,g:215,b:0},
      x:0,
      y:0
    };

    this.radius = options.radius || defaults.radius;
    this.color = options.color || defaults.color;
    this.x = options.x || defaults.x;
    this.y = options.y || defaults.y;
  }

  show(){
  	fill(this.color.r, this.color.g, this.color.b);
  	ellipse(this.x, this.y, this.radius);
  	noFill();
  }
}