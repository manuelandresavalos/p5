class Maze {
  constructor(options) {
    let defaults = {
      cols: 20,
      rows: 20,
      sizeCell: 20,
      colorWallRGB: {r:100,g:100,b:100},
      colorPathRGB: {r:255,g:255,b:255},
      automataRGB: {r:255,g:0,b:0},
    };
    
    this.cols = options.cols || defaults.cols;
    this.rows = options.rows || defaults.rows;
    this.sizeCell = options.sizeCell || defaults.sizeCell;
    this.colorWallRGB = options.colorWallRGB || defaults.colorWallRGB;
    this.colorPathRGB = options.colorPathRGB || defaults.colorPathRGB;
    this.automataRGB = options.automataRGB || defaults.automataRGB;

    this.cellMap = [];
    this.automata = {
      x: getRandomInt(0, this.cols-1),
      y: getRandomInt(0, this.rows-1),
      color: this.automataRGB
    };

    //Map of colors for each element
    this.colorCell = [];
    this.colorCell[0] = this.colorWallRGB;
    this.colorCell[1] = this.colorPathRGB;
    this.colorCell[2] = this.automata.color;
  };
  
  center(canvasWidth, canvasHeight){
    let pos = {
      x: ((canvasWidth - (this.cols * this.sizeCell))/2),
      y: ((canvasHeight - (this.rows * this.sizeCell))/2)
    }
    return pos;
  };

  binaryRandom(){
    return getRandomInt(0, 1);
  }

  changeColorCell(colorRGBObj){
    fill(colorRGBObj.r, colorRGBObj.g, colorRGBObj.b);
  }

  generate(){
    let blackOrWithe = 0;
    this.cellMap = new Array(); //Rows
    for (var row = 0; row < this.rows; row++) {//Rows
      this.cellMap[row] = new Array(); //Cols
      for (var col = 0; col < this.cols; col++) {//Cols
        blackOrWithe = this.binaryRandom();
        this.cellMap[row][col] = this.colorCell[blackOrWithe];
        if (this.automata.x == col && this.automata.y == row ) {
          this.cellMap[row][col] = this.colorCell[2];
        }
      }
    }
  };

  show(){
    for (var row = 0; row < this.cellMap.length; row++) {
      for (var col = 0; col < this.cellMap[row].length; col++) {
        let cellColor = this.cellMap[row][col];
        this.changeColorCell(cellColor);

        rect(this.sizeCell * col, this.sizeCell * row, this.sizeCell, this.sizeCell);
      }
    }
  }
}