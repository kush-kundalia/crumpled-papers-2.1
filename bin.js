class Bin {
    constructor(x, y, w, h) {
      const options = {
        restitution: 0.5,
        isStatic : true
      };
      this.body = Matter.Bodies.rectangle(x, y, w, h, options);
      Matter.World.add(world, this.body);
      this.w = w;
      this.h = h;
    }
  
    spawn() {
      const pos = this.body.position;
      const angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      stroke(0,255,0);
      strokeWeight(4);
      noFill();
      rectMode(CENTER);
    //   imageMode(CENTER);
      rect(0, 0, this.w, this.h);
      pop();
    }
  }
  