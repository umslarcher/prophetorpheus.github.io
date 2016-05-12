var NUM_CIRCLES = 12;
var circleRadius;
var rVal;
var gVal;
var bVal;

function setup() {
  createCanvas(480,600);
  circleDiameter = width/NUM_CIRCLES;
  circleRadius = circleDiameter/2;
}

function draw() {
  rVal = 255;
  gVal = 0;
  bVal = 0;
  var alternatingRow = false;

  var y = height;
  while (y >= 0) {
    var x;

    if (alternatingRow) {
      x = circleRadius;
    } else {
      x = 0;
    }

    while (x <= width) {
      stroke(color(rVal, gVal, bVal));
      fill(color(rVal, gVal, bVal));
      ellipse(x, y, circleDiameter, circleDiameter);
      x = x + circleDiameter;
    }
    y = y - circleRadius;
    alternatingRow = !alternatingRow;

    rVal = (rVal + 255)%256;
    gVal = (gVal + 5)%256;
    bVal = (bVal + 2)%256;
  }
}

function keyPressed() {
  if (keyCode === 115 || keyCode === 83) {
    saveCanvas('geometricPattern', 'png');
  }
  return false;
}