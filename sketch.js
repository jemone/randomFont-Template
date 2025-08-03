


var time =1000;

function setup() {
  createCanvas(900, 600);
  rectMode(CENTER);

}

function draw() {

  background(0);

  var nX = noise(time)
  var locX = map(nX, 0, 1, 0, width);

  var nY = noise(time+5)
  var locY = map(nY, 0, 1, 0, height);

  var g = map(nX, 0, 1, 0, 255);

  var rotZ = map(nX, 0, 1, -25, 25);

  translate(locX, locY);
  rotate(rotZ);

  fill(0,g,0);
  rect(0,0, 100,100);

  time = time + 0.01;
  
}
