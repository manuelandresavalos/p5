config = {
    screenRatio: "16:9",
    canvasWidth: 800,
    gravity: 0.0981,
    horizontalWind: 0.15,
    verticalWind: 0.0,
    forceKeys: 0.20
}

var planesArr = []

var world = {};

function setup(){
    var ratioObj = ratioFromWidth(config.canvasWidth, config.screenRatio);
    canvasH = ratioObj.height;
    canvasW = ratioObj.width;

    createCanvas(canvasW, canvasH);
    
    background(51);

    angleMode(DEGREES);

    world.gravity = createVector(0, config.gravity);
    world.horizontalWind = createVector(config.horizontalWind);
    
    for (var i=0; i<10; i++) {
        var model = Math.floor(random(3))
        planesArr.push(new Aeroplane(airplanesModel[model]))
    }
}

function draw(){
    background(51);
    //console.log("dibujar...")
    for (var i=0; i<planesArr.length; i++) {
        planesArr[i].keyboardControl();
        // planesArr[i].applyForce(world.gravity);
        // planesArr[i].applyForce(world.horizontalWind);
        // planesArr[i].applyForce(createVector(0, map(random(0,100), 0 , 100, -0.02, 0.02)));
        // planesArr[i].applyForce(createVector(map(random(0,100), 0 , 100, -0.09, 0.09), 0));
        planesArr[i].edgesBounce();
        planesArr[i].edgesInfinite();
        planesArr[i].update();
        planesArr[i].show();
    }
}