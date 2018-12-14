class Maze {
  constructor(options) {
    let defaults = {
      cols: 20,
      rows: 20,
      sizeCell: 20,
      colorWallR: 100,
      colorWallG: 100,
      colorWallB: 100,
      colorPathR: 255,
      colorPathG: 255,
      colorPathB: 255
    };
    
    this.cols = options.cols || defaults.cols;
    this.rows = options.rows || defaults.rows;
    this.sizeCell = options.sizeCell || defaults.sizeCell;
    this.colorWallR = options.colorWallR || defaults.colorWallR;
    this.colorWallG = options.colorWallG || defaults.colorWallG;
    this.colorWallB = options.colorWallB || defaults.colorWallB;
    this.colorPathR = options.colorPathR || defaults.colorPathR;
    this.colorPathG = options.colorPathG || defaults.colorPathG;
    this.colorPathB = options.colorPathB || defaults.colorPathB;
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

  changeCell(blackOrWithe){
    if (blackOrWithe == 0) {
      fill(this.colorWallR, this.colorWallG, this.colorWallB);
    } else {
      fill(this.colorPathR, this.colorPathG, this.colorPathB);
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
        this.changeCell(this.cellMap[row][col]);
        rect(this.sizeCell * col, this.sizeCell * row, this.sizeCell, this.sizeCell);
      }
    }
  }
}