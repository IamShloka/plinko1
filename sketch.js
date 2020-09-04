const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
var particle;
var plinko;
var engine1,world1;
var ground;
var division1,division2,division3,division4,division5;
var divisions=[];
var plinkos=[];
var particles=[];
function setup() {
  createCanvas(450,800);
  engine1=Matter.Engine.create();
  world1=engine1.world;
  Engine.run(engine1);
   ground=new Ground(width/2,height,width,7) 
   //plinko=new Plinko(50,150);
   var index=0;
   for(var i=90;i<=450;i=i+90){
    divisions[index]=new Division(i,800-100,5,200);
    index++;
   }
 
   for(var i=20;i<=450;i=i+50){
    plinkos[index]=new Plinko(i,150);
    index++;
   }
   
   for(var i=20;i<=450;i=i+50){
    plinkos[index]=new Plinko(i,250);
    index++;
   }
   
   for(var i=20;i<=450;i=i+50){
    plinkos[index]=new Plinko(i,350);
    index++;
   }
 
   for(var i=20;i<=450;i=i+50){
    plinkos[index]=new Plinko(i,450);
    index++;
   }
  
   for(var i=20;i<=450;i=i+50){
    plinkos[index]=new Plinko(i,550);
    index++;
   }
   //for(var i=20;i<=450;i=i+50){
    //plinkos[index]=new Plinko(i,650);
    //index++;
  //}
}

function draw() {
  background("black");  
  ground.display();
  //new loop  foreach
  if(frameCount%100===0){
    particle=new Particle(width/2,0);
    particle.display();
    particles.push(particle);
  }
  particles.forEach((pa)=>{
    pa.display();
  })
  divisions.forEach((div)=>{
    
    div.display();
  })
  plinkos.forEach((p)=>{
    p.display();
  })
  drawSprites();
  //plinko.display();
}