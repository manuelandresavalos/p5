class Maze {
  constructor(options) {
    //Default values
    let defaults = {
      cols: 20,
      rows: 20,
      cell:{
        size: 20,
      },
      colorWall: {r:100,g:100,b:100},
      colorPath: {r:255,g:255,b:255},
      colorAutomata: {r:255,g:0,b:0}
    };

    // Options settings
    this.cols = options.cols || defaults.cols;
    this.rows = options.rows || defaults.rows;
    this.cell = options.cell || defaults.cell;
    this.colorWall = options.colorWall || defaults.colorWall;
    this.colorPath = options.colorPath || defaults.colorPath;
    this.colorAutomata = options.colorAutomata || defaults.colorAutomata;

    //Create the objects to display
    this.wall = {
      type:'wall',
      color: this.colorWall
    };

    this.path = {
      type:'path',
      color: this.colorPath
    };

    this.auto = {
      type:'auto', 
      color: this.colorAutomata, 
      x: getRandomInt(0, this.cols-1), 
      y: getRandomInt(0, this.rows-1),
      estoy: this.path
    };
    
    //Creating the cellMap as array
    this.cellMap = [];

    //Map of colors for each element
    this.objCell = [];
    this.objCell[0] = this.wall;
    this.objCell[1] = this.path;
    this.objCell[2] = this.auto;
  };
  
  center(canvasWidth, canvasHeight){
    let pos = {
      x: ((canvasWidth - (this.cols * this.cell.size)) / 2),
      y: ((canvasHeight - (this.rows * this.cell.size)) / 2)
    }
    return pos;
  };

  binaryRandom(){
    return getRandomInt(0, 1);
  }

  changeColorCell(rgbObj){
    fill(rgbObj.r, rgbObj.g, rgbObj.b);
  }

  generate(){
    let wallOrPath = 0;
    this.cellMap = new Array(); //Rows
    for (var row = 0; row < this.rows; row++) {//Rows
      this.cellMap[row] = new Array(); //Cols
      for (var col = 0; col < this.cols; col++) {//Cols
        wallOrPath = this.binaryRandom();
        // Put wall or path in the array object cell
        this.cellMap[row][col] = this.objCell[wallOrPath];

        // Check if the automata is in this cell
        if (this.auto.x == col && this.auto.y == row ) {
          this.cellMap[row][col] = this.objCell[2];
        }
      }
    }
  };

  step(){
    //code here
  }

  show(){
    for (var row = 0; row < this.cellMap.length; row++) {
      for (var col = 0; col < this.cellMap[row].length; col++) {
        // Set the color of the cell
        let cellColor = this.cellMap[row][col].color;
        this.changeColorCell(cellColor);

        // Draw the cell in canvas
        rect(this.cell.size * col, this.cell.size * row, this.cell.size, this.cell.size);
      }
    }
  }
}
