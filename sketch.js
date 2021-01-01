var engine,world,box1,box2,ground;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;
box1=new Box(310,90,50,50);
box2=new Box(290,200,50,50);
ground=new Ground(200,380,400,20);
}

function draw() {
  background(0);
Engine.update(engine);
box1.display(); 
box2.display();
ground.display();    
}