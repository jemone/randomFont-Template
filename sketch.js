var font;
function preload() {
  font = loadFont('assets/Calistoga-Regular.ttf');
}

var points;

function setup() {
  createCanvas(900, 400);
  fill(255, 104, 204, 150);
  noStroke();

  points = font.textToPoints('c o d e', 50, 300, 300, {
    sampleFactor: .1,
    simplifyThreshold: 0
  });


}

function draw() {
  background(0);

  let m = mouseX;
  var r = map(m, 0, width, 0, 100);

  for (let p of points){
    let x = random(p.x-r, p.x+r);
    let y = random(p.y-r, p.y+r);

    ellipse(x, y, 7, 7);
  }
    noLoop();
}

function mouseMoved(){
    loop();
}
