class Cell {
  constructor(options) {
    let defaults = {
      x: 0,
      y: 0,
      size: 20,
      type: "grass",
      color_water: {r:0, g:191, b:255},
      color_beach: {r:255, g:255, b:204},
      color_grass: {r:50, g:205, b:50},
      color_mount: {r:160, g:82, b:42},
      color_snow: {r:255, g:255, b:255}
    };

    this.x = options.x || defaults.x;
    this.y = options.y || defaults.y;
    this.size = options.size || defaults.size;
    this.type = options.type || defaults.type;
    this.color_water = options.color_water || defaults.color_water;
    this.color_beach = options.color_beach || defaults.color_beach;
    this.color_grass = options.color_grass || defaults.color_grass;
    this.color_mount = options.color_mount || defaults.color_mount;
    this.color_snow = options.color_snow || defaults.color_snow;
  };

  show(){
    if (this.type=="water") {
      fill(this.color_water.r, this.color_water.g, this.color_water.b);
    }

    if (this.type=="beach") {
      fill(this.color_beach.r, this.color_beach.g, this.color_beach.b);
    }

    if (this.type=="grass") {
      fill(this.color_grass.r, this.color_grass.g, this.color_grass.b);
    }

    if (this.type=="mount") {
      fill(this.color_mount.r, this.color_mount.g, this.color_mount.b);
    }

    if (this.type=="snow") {
      fill(this.color_snow.r, this.color_snow.g, this.color_snow.b);
    }

    rect(this.x * this.size, this.y * this.size, this.size, this.size);
  }
}