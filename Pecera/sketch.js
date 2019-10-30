config = {
    screenRatio: "16:9",
    canvasWidth: 800,
    gravity: 0.0981,
    horizontalWind: 0.15,
    verticalWind: 0.0,
    forceKeys: 0.20,
    cantPeces: 15,
    cantBubbles: 80
}

var pecesArr = [];
var bubblesArr = [];
var world = {};

// Precarga de imagenes
var backgroundImage;
var imgsPeces = [];
function preload() {
    //Peces
    for (var i=0; i<peces.length; i++) {
        imgsPeces[peces[i].name] = loadImage(peces[i].img);
    }

    //Bubbles
    backgroundImage = loadImage("./img/oceano1.jpg");
}


function setup(){
    var ratioObj = ratioFromWidth(config.canvasWidth, config.screenRatio);
    canvasH = ratioObj.height;
    canvasW = ratioObj.width;

    createCanvas(canvasW, canvasH);

    background(51);

    angleMode(DEGREES);

    world.gravity = createVector(0, config.gravity);
    world.horizontalWind = createVector(config.horizontalWind);
    
    //Genero Peces
    for (var i=0; i<config.cantPeces; i++) {
        var model = Math.floor(random(peces.length))
        pecesArr.push(new Pez(peces[model]))
    }
    
    //Genero Bublles
    for (var i=0; i<config.cantBubbles; i++) {
        bubblesArr.push(new Bubbles())
    }
}

function draw(){
    //Fondo
    background(51);
    image(backgroundImage, 0, 0, canvasW, canvasH);

    // Peces
    for (var i=0; i<pecesArr.length; i++) {
        pecesArr[i].keyboardControl();
        pecesArr[i].applyForce(createVector(0, map(random(0,100), 0 , 100, -0.02, 0.02)));
        pecesArr[i].applyForce(createVector(map(random(0,100), 0 , 100, -0.09, 0.09), 0));
        pecesArr[i].edgesBounce();
        pecesArr[i].getOrientation();
        //pecesArr[i].edgesInfinite();
        pecesArr[i].update();
        pecesArr[i].show();
    }

    // Bubbles
    for (var q=0; q<bubblesArr.length; q++) {
        bubblesArr[q].applyForce(createVector(0, map(random(0,100), 0 , 100, -0.03, -0.05)));
        bubblesArr[q].applyForce(createVector(map(random(0,100), 0 , 100, -0.4, 0.4)), 0);
        bubblesArr[q].edgesInfinite();
        bubblesArr[q].update();
        bubblesArr[q].show();
    }
}