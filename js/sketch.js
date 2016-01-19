console.log("hello from reading from js");

var d=20;

function setup(){
	var myCanvas=createCanvas(800,250);
	// link to id mySketch from header tag
	myCanvas.parent('mySketch');
}

function draw(){
if (mouseIsPressed){
stroke(255);
} else {
stroke(30,150,200);
}
quad(mouseX,mouseY,400,130);
}