
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinImage;

function preload(){
	dustbinImage = "dustbingreen.png";
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1 = new paper(100,440,70);

	dustbin1 = new dustbin(550,580,30,150);


	ground1 = new ground();
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  Engine.update(engine);
  
  paper1.display();

  dustbin1.display();

  ground1.display();
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80,y:-100});
	}
}


