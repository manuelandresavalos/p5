var imgArr = [];
var config;

function preload() {
  config = loadJSON('./config.json', function(json){
		console.log("config", json)
		for (var i = 0; i < json.pictures.length; i++) {
	  	imgArr[i] = loadImage(json.pictures[i]);
	  }
	}, function(err){
		console.log("error", err)
	});

}


function setup() {
	createCanvas(1200, 800);
	background(51);
	for (var i = 0; i < config.pictures.length; i++) {
  	image(imgArr[i], 100 * i, 100 * i);
	}
}

function draw(){
	//image(img, 0, 0);
}