class Division {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      //this.image=loadImage("./sprites/ground.png")
      World.add(world1, this.body);
    
    }
    display(){
        push();
      var pos =this.body.position;
      translate(pos.x, pos.y);
      fill("white");
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
    
      //image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };