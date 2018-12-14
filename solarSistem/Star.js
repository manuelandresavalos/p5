class Star {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  show(){
    fill(255,255,0);
    ellipse(this.x, this.y, this.r);
  }
}