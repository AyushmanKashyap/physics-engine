const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies

var engine;
var world;
var ground;
var ball;


function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 engine  = Engine.create()

 var groundOptions = {
   isStatic : true
 }
 var ballOptions = {
restitution:1
 }
 world = engine.world;
 ground = Bodies.rectangle(200,390,200,20,groundOptions)
 World.add(world,ground)

 ball = Bodies.circle(200,100,20,ballOptions)
 World.add(world,ball)
}

function draw() {
  background(255,255,255);  
 Engine.update(engine)
rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,20)
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}