var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	var packageBody_options ={
		isStatic:true,
		restitution:1.0
	}

	packageBody = Bodies.rectangle(200,100,20,packageBody_options);
	World.add(world, packageBody);

	var ground_options ={
		isStatic:true
	}
	

	//Create a Ground
	ground = Bodies.rectangle(200,390,200,20,ground_options);
	 World.add(world, ground);
	 
	 console.log(packageBody.type);
	 console.log(packageBody.position.X);
	 console.log(packageBody.position.Y);

	Engine.run(engine);
  
}


function draw() {
  background(100);
  rectMode(CENTER);
  rect(packageBody.position.X,packageBody.position.Y,50,50);

  rectMode(CENTER);
  rect(ground.position.X,ground.position.Y,50,50);
 
 
 // packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyDown("space")) {
    Matter.body.setStatic(packageBody,{isStatic:false});
  }
}



