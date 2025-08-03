


var time =1000;

function setup() {
  createCanvas(900, 400);
  rectMode(CENTER);

}

function draw() {

  background(0);

  var nX = nose(time)
  var locX = map(nX, 0, 1, 0, width);

  thanslate(locX, heigh/2);

  rectangle (0,0, 100,100);

  time = time + 0.01;
  
}
