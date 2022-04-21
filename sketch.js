const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseImage = loadImage("./assets/base.png");
  playerImage=loadImage("assets/player.png")
}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  var options = {
    isStatic: true
  }
p1=Bodies.rectangle(200,350,180,150,options)
World.add(world,p1)
p2=Bodies.rectangle(250,p1.position.y-160,50,180,options)
World.add(world,p2)
player=new Player(340,p1.position.y-112,120,120)
  

  
 
 
}

function draw() {
  background(backgroundImg)
  image(baseImage,p1.position.x,p1.position.y,180,150)
  image(playerImage,p2.position.x,p2.position.y,50,180)
  Engine.update(engine);
 player.display()
 fill("black")
 textAlign("center")
 textSize(40)
 text("Archery Game",width/2,100)
  

  

}
