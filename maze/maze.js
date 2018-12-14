class Maze {
  constructor(options) {
    let defaults = {
      cols: 20,
      rows: 20,
      sizeCell: 20,
      //cellArrX: [],
      //cellArrY: [],
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

  changeCell(){
    var blackOrWithe = Math.round(Math.random(0, 1));
    console.log("blackOrWithe: ", blackOrWithe);
    if (blackOrWithe == 0) {
      fill(this.colorWallR, this.colorWallG, this.colorWallB);
    } else {
      fill(this.colorPathR, this.colorPathG, this.colorPathB);
    }
  }

  show(){
    //console.log(this)
    
    for (var col = 0; col < this.cols; col++) {
      //colls
      for (var row = 0; row < this.rows; row++) {
        // rows
        this.changeCell();
        rect(this.sizeCell * col, this.sizeCell * row, this.sizeCell, this.sizeCell);
      }
    }
  };
}
