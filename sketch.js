
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyIMG;
var stone1;
var mango1,mango2,mango3,mango4,mango5;



function preload()
{
	bodyIMG=loadImage('Plucking Mangoes/boy.png');
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy=createSprite(200,50,50,50);
	boy.addImage("yeet",boyImg);

	tree1= new Tree()

	stone1=new Stone(210,65,50,50);

	mango1=new Mango(400,300,30,30);
	mango2=new Mango(300,400,30,30);
	mango3=new Mango(250,300,50,50);
	mango4= new Mango(300,250,30,30);

	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
 
  keyPressed();
}
function keyPressed(){
	if(keyCode===32){
		Matter.body.setPosition(stone1.body,{x:235,y:420});
		launcherObject.attach(stone1.body);
	}
}



