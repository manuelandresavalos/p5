var canvasX = 1200;
var canvasY = 800;
var imgArr = [];
var config;
var photoW = 368;
var photoH = 244;
var offset = 10;


function preload() {
  config = loadJSON('./config.json', 
  function(json){
    for (var i = 0; i < json.pictures.length; i++) {
      imgArr[i] = loadImage(json.pictures[i]);
    }
  }, 
  function(err){
    console.log("error", err)
  });
}

function setup() {
    createCanvas(canvasX, canvasY);
    background(51);
    var col = 0;
    var row = 0;
    for (var i = 0; i < config.pictures.length; i++) {
        var mod=(i % 3);
        console.log("col:" + col, "row:" + row, "mod:"+ mod);
        image(imgArr[i], photoW * col, photoH * row);
        if (mod == 2) {
            row++;
            col=-1;
        }
        col++;
    }
}

function draw() {
    // Code here
}
