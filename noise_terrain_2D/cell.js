class Cell {
  constructor(options) {
    let defaults = {
      x: 0,
      y: 0,
      size: 20,
      type: "grass",
      color_snow: {r:255, g:255, b:255},
      color_mount_top: {r:222, g:184, b:135},
      color_mount_middle: {r:205, g:133, b:63},
      color_mount_base: {r:160, g:82, b:45},
      /*
      color_mount_top: {r:205, g:133, b:63},
      color_mount_base: {r:160, g:82, b:42},
      */
      color_grass: {r:50, g:205, b:50},
      color_desert: {r:255, g:255, b:204},
      color_water: {r:0, g:191, b:255},
      color_water_deeper: {r:0, g:128, b:255},
    };

    this.x = options.x || defaults.x;
    this.y = options.y || defaults.y;
    this.size = options.size || defaults.size;
    this.type = options.type || defaults.type;
    this.color_snow = options.color_snow || defaults.color_snow;
    this.color_mount_top = options.color_mount_top || defaults.color_mount_top;
    this.color_mount_middle = options.color_mount_middle || defaults.color_mount_middle;
    this.color_mount_base = options.color_mount_base || defaults.color_mount_base;
    this.color_grass = options.color_grass || defaults.color_grass;
    this.color_desert = options.color_desert || defaults.color_desert;
    this.color_water = options.color_water || defaults.color_water;
    this.color_water_deeper = options.color_water_deeper || defaults.color_water_deeper;
  };

  show(){
    if (this.type=="snow") {
      fill(this.color_snow.r, this.color_snow.g, this.color_snow.b);
    }

    if (this.type=="mount_top") {
      fill(this.color_mount_top.r, this.color_mount_top.g, this.color_mount_top.b);
    }

    if (this.type=="mount_middle") {
      fill(this.color_mount_middle.r, this.color_mount_middle.g, this.color_mount_middle.b);
    }

    if (this.type=="mount_base") {
      fill(this.color_mount_base.r, this.color_mount_base.g, this.color_mount_base.b);
    }
    
    if (this.type=="grass") {
      fill(this.color_grass.r, this.color_grass.g, this.color_grass.b);
    }

    if (this.type=="desert") {
      fill(this.color_desert.r, this.color_desert.g, this.color_desert.b);
    }

    if (this.type=="water") {
      fill(this.color_water.r, this.color_water.g, this.color_water.b);
    }

    if (this.type=="water_deeper") {
      fill(this.color_water_deeper.r, this.color_water_deeper.g, this.color_water_deeper.b);
    }

    rect(this.x * this.size, this.y * this.size, this.size, this.size);
  }
}