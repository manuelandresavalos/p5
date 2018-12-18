class Cell {
  constructor(options) {
    let defaults = {
      x: 0,
      y: 0,
      size: 20,
      visited: false,
      color: {r:200,g:200,b:200},
      color_visited: {r:200,g:200,b:51, a: 50}
    };

    this.x = options.x || defaults.x;
    this.y = options.y || defaults.y;
    this.size = options.size || defaults.size;
    this.visited = options.visited || defaults.visited;
    this.color = options.color || defaults.color;
    this.color_visited = options.color_visited || defaults.color_visited;

    this.x = (this.x * this.size);
    this.y = (this.y * this.size);
    this.updateWalls();
  };

  updateWalls(){
    this.wallUp = {
      x1: this.x,
      y1: this.y,
      x2: this.x + this.size,
      y2: this.y,
      show: true
    };
    this.wallRight = {
      x1: this.x + this.size,
      y1: this.y,
      x2: this.x + this.size,
      y2: this.y + this.size,
      show: true
    };
    this.wallDown = {
      x1: this.x + this.size,
      y1: this.y + this.size,
      x2: this.x,
      y2: this.y + this.size,
      show: true
    };
    this.wallLeft = {
      x1: this.x,
      y1: this.y + this.size,
      x2: this.x,
      y2: this.y,
      show: true
    };
  }

  show(){
    stroke(this.color.r, this.color.g, this.color.b);
    if(this.wallUp.show) {
      line(this.wallUp.x1, this.wallUp.y1, this.wallUp.x2, this.wallUp.y2);
    }
    if(this.wallRight.show) {
      line(this.wallRight.x1, this.wallRight.y1, this.wallRight.x2, this.wallRight.y2);
    }
    if(this.wallDown.show) {
      line(this.wallDown.x1, this.wallDown.y1, this.wallDown.x2, this.wallDown.y2);
    }
    if(this.wallLeft.show) {
      line(this.wallLeft.x1, this.wallLeft.y1, this.wallLeft.x2, this.wallLeft.y2);
    }
  }
}