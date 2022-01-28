var a;
var b;
var c;
var stars = [];
var speed=8;
var spacesnd;
var slider;

function preload() {
  spacesnd = loadSound("spacesnd.mp3.mp3");
}

function setup() {
  createCanvas(600, 400);

  spacesnd.loop();       //to restart the sound after it ends 
  slider = createSlider(0, 1, 1, 0.01);        //volume slider

  for (var i = 0; i < 1500; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(0, 15);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();

    spacesnd.setVolume(slider.value());
  }
}
class Star {
  constructor(x, y, z) {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);

    this.speed = 5;
  }
  update() {
    this.z = this.z - speed;
    if (this.z < 0.1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
    }
  }

  show() {
    var a = map(this.x / this.z, 2, 30, 75, width);
    var b = map(this.y / this.z, 0, 30, 0, height);
    var c = map(this.z, 0, width, 0, 200);
    fill(a, b, c);
    noStroke();

    var sx = map(this.x / this.z, 0, 8, 0, width);
    var sy = map(this.y / this.z, 0, 8, 0, height);

    var r = map(this.z, 0, width, 5, 0);
    ellipse(sx, sy, r, r);
  }
}
