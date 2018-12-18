class Maze {
  constructor(options) {
    //Default values
    let defaults = {
      cols: 20,
      rows: 20,
      cellSize: 20
    };

    // Options settings
    this.cols = options.cols || defaults.cols;
    this.rows = options.rows || defaults.rows;
    this.cellSize = options.cellSize || defaults.cellSize;
    this.cellMap = new Array();
  };
  
  center(canvasWidth, canvasHeight){
    let pos = {
      x: ((canvasWidth - (this.cols * this.cellSize)) / 2),
      y: ((canvasHeight - (this.rows * this.cellSize)) / 2)
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
        var cell = new Cell({x: col, y:row, size:this.cellSize});
        this.cellMap[row][col] = cell;
        console.log(this.cellMap[row][col]);
      }
    }
  };

  step(){
    //code here
  }

  drawCell(cell){
    stroke(cell.color.r, cell.color.g, cell.color.b);
    line(cell.wallUp.x1, cell.wallUp.y1, cell.wallUp.x2, cell.wallUp.y2);
    line(cell.wallRight.x1, cell.wallRight.y1, cell.wallRight.x2, cell.wallRight.y2);
    line(cell.wallDown.x1, cell.wallDown.y1, cell.wallDown.x2, cell.wallDown.y2);
    line(cell.wallLeft.x1, cell.wallLeft.y1, cell.wallLeft.x2, cell.wallLeft.y2);
  }

  show(){
    for (var row = 0; row < this.cellMap.length; row++) {
      for (var col = 0; col < this.cellMap[row].length; col++) {
        // Draw the cell in canvas
        this.drawCell(this.cellMap[row][col]);
      }
    }
  }
}
