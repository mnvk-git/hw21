var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,right,left,engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
	var ball_options = {
		isStatic:false,
		 restitution:0.3,
		 friction:0,
		 density:1.2
	  }
	
	  ball= Bodies.circle(100,100,20,ball_options);
	  World.add(world,ball);
	  ground =new Ground(width/2,670,width,20);
      right = new Ground(width-100,600,20,120);
      left = new Ground(width-300,600,20,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x, ball.position.y,40,40 );
  drawSprites();
  ground.show();
  left.show();
  right.show();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:55,y:-55})
	}
}


