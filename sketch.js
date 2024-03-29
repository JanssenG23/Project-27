
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobdiameter
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,50,500,40);

	bobObject1 = new Bob(200,150,35,35);
	bobObject2 = new Bob(220,150,35,35);
	bobObject3 = new Bob(240,150,35,35);
	bobObject4 = new Bob(260,150,35,35);
	bobObject5 = new Bob(280,150,35,35);

	bobdiameter = 40;
	
	rope = new Rope(bobObject1.body,roof.body,-bobdiameter*4,0)
	rope2 = new Rope(bobObject2.body,roof.body,-bobdiameter*2,0)
	rope3 = new Rope(bobObject3.body,roof.body,-bobdiameter*0,0)
	rope4 = new Rope(bobObject4.body,roof.body,-bobdiameter*-2,0)
	rope5 = new Rope(bobObject5.body,roof.body,-bobdiameter*-4,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  roof.display();
  
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-90,y:-95})
	}
}

