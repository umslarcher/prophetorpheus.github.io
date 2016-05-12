var NUM_CIRCLES = 12;
var circleRadius;
var rVal;
var gVal;
var bVal;
var animated;

function setup() {
  var c = createCanvas(480,600);
  c.mouseClicked(freeze);
  reset();
}

function reset() {
  circleDiameter = width/NUM_CIRCLES;
  circleRadius = circleDiameter/2;
  animated = true;
  rVal = random(0,255);
  gVal = random(0,255);
  bVal = random(0,255);
}

function draw() {
  if (animated) {
    drawAnimated();
  }
}

function freeze() {
  animated = !animated;
  return false;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    NUM_CIRCLES--;
    reset();
  }
  if (keyCode === RIGHT_ARROW) {
    NUM_CIRCLES++;
    reset();
  }
  if (keyCode === 115 || keyCode === 83) {
    saveCanvas('geometricPattern', 'png');
  }
  return false;
}

function drawAnimated() {
  var alternatingRow = false;

  var y = height;
  while (y >= 0) {
    var x = alternatingRow ? circleRadius : 0;

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