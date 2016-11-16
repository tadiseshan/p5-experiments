function setup() {
  createCanvas(400,400);
}

function draw() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var a = random(255);
  var diam = random(20)

  fill(r, g, b, a);
  ellipse(random(400), random(400), diam, diam);
}