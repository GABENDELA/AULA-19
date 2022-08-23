
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

    var block1_options = {
		restituion:0.5,
		friction:0.02,
		frictionAir:0
		}

var block2_options = {
		restituion:0.7,
		friction:0.01,
		frictionAir:0.1
		}

		var block3_options = {
			restituion:0.01,
			friction:1,
			frictionAir:0.3
			}

	block1 = Bodies.circle(220,10,10,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(110,50,10,10,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(350,50,10,10,block3_options);
	World.add(world,block3);

    var plane_options={
		isStatic: true
	}

 plane = Bodies.rectangle(0,500,1000,2,plane_options)

 World.add(world,plane)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(144,238,144);
  
  drawSprites();
 
  Engine.update(engine);
  circle(block1.position.x,block1.position.y,30)

  rect(block2.position.x,block2.position.y,50,50)

  rect(block3.position.x,block3.position.y,100,50)

  rect(plane.position.x,plane.position.y,1000,2)
}



