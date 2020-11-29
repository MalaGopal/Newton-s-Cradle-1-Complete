
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var roof,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 1600);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(700,200,400,30)
	bobObj1 = new Bob(200,400);
	bobObj2 = new Bob(250,400);
	bobObj3 = new Bob(300,400);
	bobObj4 = new Bob(350,400);
	bobObj5 = new Bob(400,400);

	rope1 = new Rope(bobObj1.body,roof.body,-100,300,100)
	rope2 = new Rope(bobObj2.body,roof.body,-50,300,-50)
	rope3 = new Rope(bobObj3.body,roof.body,0,300,0)
	rope4 = new Rope(bobObj4.body,roof.body,50,300,50);
	rope5 = new Rope(bobObj5.body,roof.body,100,300,100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObj2.body,bobObj2.position,{x:-50,y:-50})
	}
}

