class Maze {
  constructor(options) {
    //Default values
    let defaults = {
      cols: 20,
      rows: 20,
      cellSize: 20,
      done: false
    };

    // Options settings
    this.cols = options.cols || defaults.cols;
    this.rows = options.rows || defaults.rows;
    this.cellSize = options.cellSize || defaults.cellSize;
    this.cellCurrent = {x:0, y:0};
    this.cellLast = {x:0, y:0};
    this.cellDirection = '';
    this.cellMap = [];
    this.stack = [];
    this.done = options.done || defaults.done;
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
    //We use reduced name of vars.
    let currentCell = this.cellMap[this.cellCurrent.x][this.cellCurrent.y];
    let lastCell = this.cellMap[this.cellLast.x][this.cellLast.y];
    
    //Set the current cell as visited
    currentCell.visited = true;
    
    //Set te current cell as current active cell
    currentCell.current = true;

    //Remove walls on depends the direction
    if (this.cellDirection == 'up') {
      //At this moment, currentCell is not longer the original(0,0) is another cell
      //This is the couse first hide the new currentCell.wallDown and after the lastCell.wallUp.
      currentCell.wallDown.show = false; 
      lastCell.wallUp.show = false;
    }
    if (this.cellDirection == 'right') {
      //Idem avobe
      currentCell.wallLeft.show = false;
      lastCell.wallRight.show = false;
    }
    if (this.cellDirection == 'down') {
      //Idem avobe
      currentCell.wallUp.show = false;
      lastCell.wallDown.show = false;
    }
    if (this.cellDirection == 'left') {
      //Idem avobe
      currentCell.wallRight.show = false;
      lastCell.wallLeft.show = false;
    }

    //Check who neighbors are disponible to move
    var nonVisitedCell = this.checkNeighborsNonVisited(this.cellMap);

    // If we have a neighbor to chose...
    if (nonVisitedCell.length - 1 >= 0) {

      // Chose one cell randomly
      var randomIndex = getRandomInt(0, nonVisitedCell.length - 1);
      var nextCell = nonVisitedCell[randomIndex];

      //Put this cell in the stack
      this.stack.push(currentCell);

      // Seteo hacia donde voy a ir
      this.cellDirection = nextCell.moveToUp + nextCell.moveToRight + nextCell.moveToDown + nextCell.moveToLeft;

      this.cellLast.x = this.cellCurrent.x;
      this.cellLast.y = this.cellCurrent.y;

      // Chenge the cellCurrentRow and cellCurrentCol with the new value.
      this.cellCurrent.x = nextCell.y;
      this.cellCurrent.y = nextCell.x;
    } else {
      //if we don't have any neighbor to move, go back one cell in the history.
      var prevCell = this.stack.pop();

      // if we have more than 1 items in the history, move to this item.
      if (this.stack.length > 0) {
        this.cellCurrent.x = prevCell.y;
        this.cellCurrent.y = prevCell.x;
      } else {
        this.cellCurrent.x = 0;
        this.cellCurrent.y = 0;
        this.done = true;
      }
    }
  }
  
  //This border fix a wrong behaivour of automata [fix this]
  drawBorderTable(){
    noFill()
    stroke(200);
    rect(0, 0, this.cols * this.cellSize, this.rows * this.cellSize);
  }

  show(){
    //This border fix a wrong behaivour of automata [fix this]
    this.drawBorderTable();
    for (var row = 0; row < this.cellMap.length; row++) {
      for (var col = 0; col < this.cellMap[row].length; col++) {
        // Draw the cell in canvas
        this.cellMap[row][col].show();
      }
    }
  }

  checkNeighborsNonVisited(cellMap){
    let nonVisitedCell = [];
    let y = this.cellCurrent.x;
    let x = this.cellCurrent.y;
    let top = y - 1;
    let right = x + 1;
    let down = y + 1;
    let left = x - 1;
    let cols = this.cols;
    let rows = this.rows;
    let size = this.cellSize;
    
    let limitTop = 0;
    let limitRight = cols-1;
    let limitDown = rows-1;
    let limitLeft = 0;

    if (top >= limitTop) {
      if (cellMap[top][x].visited == false) {
        cellMap[top][x].moveToUp = 'up';
        cellMap[top][x].moveToRight = '';
        cellMap[top][x].moveToDown = '';
        cellMap[top][x].moveToLeft = '';
        nonVisitedCell.push(cellMap[top][x]);
      }
    }
  
    if (right <= limitRight) {
      if (cellMap[y][right].visited == false) {
        cellMap[y][right].moveToUp = '';
        cellMap[y][right].moveToRight = 'right';
        cellMap[y][right].moveToDown = '';
        cellMap[y][right].moveToLeft = '';
        nonVisitedCell.push(cellMap[y][right]);
      }
    }

    if (down <= limitDown) {
      if (cellMap[down][x].visited == false) {
        cellMap[down][x].moveToUp = '';
        cellMap[down][x].moveToRight = '';
        cellMap[down][x].moveToDown = 'down';
        cellMap[down][x].moveToLeft = '';
        nonVisitedCell.push(cellMap[down][x]);
      }
    }

    if (left >= limitLeft) {
      if (cellMap[y][left].visited == false) {
        cellMap[y][left].moveToUp = '';
        cellMap[y][left].moveToRight = '';
        cellMap[y][left].moveToDown = '';
        cellMap[y][left].moveToLeft = 'left';
        nonVisitedCell.push(cellMap[y][left]);
      }
    }

    return nonVisitedCell;
  };
}
