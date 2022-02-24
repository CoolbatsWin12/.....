const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload() {
 bg=loadImage("assets/background.gif")
 towerim=loadImage("assets/tower.png")
}

function setup() {
  createCanvas(1200, 550);
  engine = Engine.create();
  world = engine.world;
  
 var prop={
   isStatic:true
 } 
 tower=Bodies.rectangle(160,350,160,310,prop)
 World.add(world,tower)
 canon=new Canon(180,110,130,100,0)
}

function draw() {
  background(bg);
  Engine.update(engine);
  push()
  imageMode(CENTER)
  image(towerim,tower.position.x,tower.position.y,160,310)
  pop()
  canon.display()
}
