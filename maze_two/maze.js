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
    this.cellCurrent = {row:0, col:0}
    this.cellMap = [];
    this.stack = [];
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

  checkNeighborsNonVisited(cellMap){
    var nonVisitedCell = [];
    var y = this.cellCurrent.row;
    var x = this.cellCurrent.col;
    var top = y - 1;
    var right = x + 1;
    var down = y + 1;
    var left = x - 1;

    if (top >= 0) {
      if (cellMap[top][x].visited == false) {
        nonVisitedCell.push(cellMap[top][x]);
      }
    }
  
    if (right <= (cellMap.length - 1)) {
      if (cellMap[y][right].visited == false) {
        nonVisitedCell.push(cellMap[y][right]);
      }
    }

    if (down <= (cellMap.length - 1)) {
      if (cellMap[down][x].visited == false) {
        nonVisitedCell.push(cellMap[down][x]);
      }
    }

    if (left >= 0) {
      if (cellMap[y][left].visited == false) {
        nonVisitedCell.push(cellMap[y][left]);
      }
    }

    return nonVisitedCell;
  };

  step(){
    //Set the current cell as visited
    this.cellMap[this.cellCurrent.row][this.cellCurrent.col].visited = true;
    
    //Set te current cell as current active cell.    
    this.cellMap[this.cellCurrent.row][this.cellCurrent.col].current = true;
    
    console.log(this.cellMap[this.cellCurrent.row][this.cellCurrent.col]);
    
    //Check who neighbors are disponible to move
    var nonVisitedCell = this.checkNeighborsNonVisited(this.cellMap);

    // If we have a neighbor to chose, pick up one randomly
    if (nonVisitedCell.length - 1 >= 0) {
      var randomIndex = getRandomInt(0, nonVisitedCell.length - 1);
      var nextCell = nonVisitedCell[randomIndex];
      // Chenge the cellCurrentRow and cellCurrentCol with the new value.
      this.cellCurrent.row = nextCell.y;
      this.cellCurrent.col = nextCell.x;
      
      //Put this cell in the stack
      this.stack.push(this.cellMap[this.cellCurrent.row][this.cellCurrent.col]);

    } else {
      var prevCell = this.stack.pop();
      if (this.stack.length > 0) {
        this.cellCurrent.row = prevCell.y
        this.cellCurrent.col = prevCell.x
      }
    }
  }

  show(){
    for (var row = 0; row < this.cellMap.length; row++) {
      for (var col = 0; col < this.cellMap[row].length; col++) {
        // Draw the cell in canvas
        this.cellMap[row][col].show();

        // Set current cell in false to reset all cels and put the current again.
        this.cellMap[row][col].current = false;
      }
    }
  }
}
