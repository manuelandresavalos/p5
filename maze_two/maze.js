class Maze {
  constructor(options) {
    //Default values
    let defaults = {
      cols: 20,
      rows: 20,
      cell:{
        size: 20,
        visited: false,
        color: {r:71,g:71,b:71},
        color_visited: {r:200,g:200,b:51, a: 50},
        wallUp:{},
        wallRight:{},
        wallDown:{},
        wallLeft:{},
      },
      wall:{
        type:'wall',
        color: {r:100,g:100,b:100},
        size: 1,
        x: 0,
        y: 0
      }
    };

    // Options settings
    this.cols = options.cols || defaults.cols;
    this.rows = options.rows || defaults.rows;
    this.cell = options.cell || defaults.cell;
    this.wall = options.wall || defaults.wall;
    this.cellMap = new Array();
  };
  
  center(canvasWidth, canvasHeight){
    let pos = {
      x: ((canvasWidth - (this.cols * this.cell.size)) / 2),
      y: ((canvasHeight - (this.rows * this.cell.size)) / 2)
    }
    translate(pos.x, pos.y)
    //return pos;
  };

  binaryRandom(){
    return getRandomInt(0, 1);
  }

  changeColorCell(rgbObj){
    fill(rgbObj.r, rgbObj.g, rgbObj.b);
  }

  generate(){
    for (var row = 0; row < this.rows; row++) {
      this.cellMap[row] = new Array();
      for (var col = 0; col < this.cols; col++) {
        this.cellMap[row][col] = this.cell;
      }
    }
  };

  step(){
    //code here
  }

  show(){
    for (var row = 0; row < this.cellMap.length; row++) {
      for (var col = 0; col < this.cellMap[row].length; col++) {
        // Draw the cell in canvas
        noStroke();
        fill(this.cell.color.r, this.cell.color.g, this.cell.color.b);
        rect(this.cell.size * col, this.cell.size * row, this.cell.size, this.cell.size);
      }
    }
  }
}
