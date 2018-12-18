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
  };

  generate(){
    for (var row = 0; row < this.rows; row++) {
      this.cellMap[row] = new Array();
      for (var col = 0; col < this.cols; col++) {
        var cell = new Cell({x: col, y:row, size:this.cellSize});
        this.cellMap[row][col] = cell;
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
        this.cellMap[row][col].show();
      }
    }
  }
}
