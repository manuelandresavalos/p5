class Maze {
  constructor(options) {
    let defaults = {
      cols: 20,
      rows: 20,
      sizeCell: 20,
      colorWallRGB: {r:100,g:100,b:100},
      colorPathRGB: {r:255,g:255,b:255}
    };
    
    this.cols = options.cols || defaults.cols;
    this.rows = options.rows || defaults.rows;
    this.sizeCell = options.sizeCell || defaults.sizeCell;
    this.colorWallRGB = options.colorWallRGB || defaults.colorWallRGB;
    this.colorPathRGB = options.colorPathRGB || defaults.colorPathRGB;
  };
  
  center(canvasWidth, canvasHeight){
    let pos = {
      x: ((canvasWidth - (this.cols * this.sizeCell))/2),
      y: ((canvasHeight - (this.rows * this.sizeCell))/2)
    }
    return pos;
  };

  binaryRandom(){
    return Math.round(Math.random(0, 1));
  }

  changeRawedCell(blackOrWithe){
    if (blackOrWithe == 0) {
      fill(this.colorWallRGB.r, this.colorWallRGB.g, this.colorWallRGB.b);
    } else {
      fill(this.colorPathRGB.r, this.colorPathRGB.g, this.colorPathRGB.b);
    }
  }

  generate(){
    let blackOrWithe = 0;
    this.cellMap = new Array(); //Rows
    for (var row = 0; row < this.rows; row++) {//Rows
      this.cellMap[row] = new Array(); //Cols
      for (var col = 0; col < this.cols; col++) {//Cols
        blackOrWithe = this.binaryRandom();
        this.cellMap[row][col] = blackOrWithe;
      }
    }
  };

  show(){
    for (var row = 0; row < this.cellMap.length; row++) {
      for (var col = 0; col < this.cellMap[row].length; col++) {
        this.changeRawedCell(this.cellMap[row][col]);
        rect(this.sizeCell * col, this.sizeCell * row, this.sizeCell, this.sizeCell);
      }
    }
  }
}