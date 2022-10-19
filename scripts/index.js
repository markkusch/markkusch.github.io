let stars = [];
let starsColors = [
  '#afc9ff',
  '#c7d8ff',
  '#fff4f3',
  '#ffe5cf',
  '#ffd9b2',
  '#ffc78e',
  '#ffa651'
]

class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.color = starsColors[floor(random(0, starsColors.length))];
  }

  update() {
    this.z = this.z - 10;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
    }
  }

  show() {
    fill(this.color);
    noStroke();
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);
    let r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, r, r);
  }
}

function setup() {
  let cnv = createCanvas(width = document.body.clientWidth, height = document.body.clientHeight);
  cnv.parent('content'); // 'content' for whole website, 'index' for index page only
  for (let i = 0; i < 500; i++) {
    stars.push(new Star());
  }
}

function draw() {
  clear();
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}