
var t =100;

function setup() {
  createCanvas(700, 300);
  background(255);
  rectMode(CENTER);
  noiseSeed(0)

}

function draw() {
  background(200);

  noiseDetail(1);
  noFill();
  beginShape();
  for (var x=0; x<width; x++){
    var y = noise(x/100) * height;
    vertex(x, y);
    }
  endShape(OPEN);

  noLoop();
}

function randomGrid(){
  for (var x=0; x<width; x++){
    for(var y=0; y<height; y++){
      var n = noise(x/10,y/10);
      var c = map(n, 0, 1, 0, 255);
      stroke(c);
      point(x,y);
    }
  }
}



