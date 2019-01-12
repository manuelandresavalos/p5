class Cell {
  constructor(options) {
    let defaults = {
      x: 0,
      y: 0,
      size: 20,
      rgb: {r:255, g:255, b:255}
    };

    this.x = options.x || defaults.x;
    this.y = options.y || defaults.y;
    this.size = options.size || defaults.size;
    this.rgb = options.rgb || defaults.rgb;
  };
  
  show(){
    let r = this.rgb.r;
    let g = this.rgb.g;
    let b = this.rgb.b;
    fill(r, g, b);
    rect(this.x * this.size, this.y * this.size, this.size, this.size);
  }
}