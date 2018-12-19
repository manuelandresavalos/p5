class Cell {
  constructor(options) {
    let defaults = {
      id: '',
      x: 0,
      y: 0,
      size: 20,
      current: false,
      visited: false,
      color: {r:200, g:200, b:200},
      color_current: {r:255, g:0, b:0, a:100},
      color_visited: {r:102, g:0, b:153, a: 50}
    };

    this.x = options.x || defaults.x;
    this.y = options.y || defaults.y;
    this.size = options.size || defaults.size;
    this.current = options.current || defaults.current;
    this.visited = options.visited || defaults.visited;
    this.color = options.color || defaults.color;
    this.color_current = options.color_current || defaults.color_current;
    this.color_visited = options.color_visited || defaults.color_visited;
    this.moveToUp = '';
    this.moveToRight = '';
    this.moveToDown = '';
    this.moveToLeft = '';

    let x = (this.x * this.size);
    let y = (this.y * this.size);
    this.wallUp = {
      x1: x,
      y1: y,
      x2: x + this.size,
      y2: y,
      show: true
    };
    this.wallRight = {
      x1: x + this.size,
      y1: y,
      x2: x + this.size,
      y2: y + this.size,
      show: true
    };
    this.wallDown = {
      x1: x + this.size,
      y1: y + this.size,
      x2: x,
      y2: y + this.size,
      show: true
    };
    this.wallLeft = {
      x1: x,
      y1: y + this.size,
      x2: x,
      y2: y,
      show: true
    };
  };

  show(){
    //Show or not any wall depending the direction of current cell.
    stroke(this.color.r, this.color.g, this.color.b);
    if(this.wallUp.show == true) {
      line(this.wallUp.x1, this.wallUp.y1, this.wallUp.x2, this.wallUp.y2);
    }
    if(this.wallRight.show == true) {
      line(this.wallRight.x1, this.wallRight.y1, this.wallRight.x2, this.wallRight.y2);
    }
    if(this.wallDown.show == true) {
      line(this.wallDown.x1, this.wallDown.y1, this.wallDown.x2, this.wallDown.y2);
    }
    if(this.wallLeft.show == true) {
      line(this.wallLeft.x1, this.wallLeft.y1, this.wallLeft.x2, this.wallLeft.y2);
    }

    if (this.visited) {
      noStroke();
      fill(this.color_visited.r, this.color_visited.g, this.color_visited.b, this.color_visited.a);
      rect(this.x * this.size, this.y * this.size, this.size, this.size);
      noFill();
    }

    if (this.current) {
      noStroke();
      fill(this.color_current.r, this.color_current.g, this.color_current.b, this.color_current.a);
      rect(this.x * this.size, this.y * this.size, this.size, this.size);
      noFill();
    }

    // Reset current to all items.
    this.current = false;
  }
}