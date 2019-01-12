class Cell {
  constructor(options) {
    let defaults = {
      x: 0,
      y: 0,
      size: 20,
      typeLevel: -1
    };

    this.x = options.x || defaults.x;
    this.y = options.y || defaults.y;
    this.size = options.size || defaults.size;
    this.typeLevel = options.typeLevel || defaults.typeLevel;

    this.colors = [];
    this.colors[11] = this.rgb(254,254,254);  // Snow
    this.colors[10] = this.rgb(230,230,230);  // Dirty Snow
    this.colors[9] = this.rgb(221,183,135);   // Top mountain
    this.colors[8] = this.rgb(204,132,64);    // Middle mountain
    this.colors[7] = this.rgb(177,91,51);     // Base up mountain
    this.colors[6] = this.rgb(159,81,45);     // Base mountain
    this.colors[5] = this.rgb(45,204,55);     // Top grass
    this.colors[4] = this.rgb(166,202,1);     // Base grass
    this.colors[3] = this.rgb(254,254,204);   // Sand
    this.colors[2] = this.rgb(9,191,253);     // Top water
    this.colors[1] = this.rgb(48,147,255);    // Middle water
    this.colors[0] = this.rgb(0,111,233);     // Base water
  };
  
  rgb(r, g, b) {
    return {r:r, g:g, b:b};
  }

  delete() {
    delete(this);
  }

  show(){
    if (this.typeLevel >= this.colors.length) {
      this.typeLevel = this.colors.length - 1;
    } else if (this.typeLevel <= 0) {
      this.typeLevel = 0;
    }

    let r = this.colors[this.typeLevel].r;
    let g = this.colors[this.typeLevel].g;
    let b = this.colors[this.typeLevel].b;
    fill(r, g, b);
    rect(this.x * this.size, this.y * this.size, this.size, this.size);
  }
}