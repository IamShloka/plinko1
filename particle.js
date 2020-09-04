class Particle{
    constructor(x,y){
        var options = {
            'density':1,
            'isStatic':false
        }
        this.body=Bodies.circle(x,y,10,options)
        World.add(world1,this.body);

    }
    display(){
        fill("magenta")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,10,10)
    }
}