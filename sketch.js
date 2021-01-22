const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score=0

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope
var ground1
var ground2
var ground3
var ground4
var ground5
var ground6
var ground7
var ground8
var ground9
var ground10
var ground11
var ground12
var ball2
var ball3
var ball4
var ball5
var ball6
var ball7
var ball8
var ball9
var ball10
var ball11
var ball12
var ball13
var ball14



function setup() {
  createCanvas(1000, 10000);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);
  ground1 = new Ground(300,500,20,200)
  ground2 = new Ground(400,500,20,200)
  ground3 = new Ground(500,500,20,200)
  ground4 = new Ground(600,500,20,200)
  ground5 = new Ground(700,500,20,200)
  ground6 = new Ground(800,500,20,200)

  ground7 = new Ground(530,300,10,10)
  ground8 = new Ground(560,310,10,10)
  ground9 = new Ground(590,320,10,10)
  ground10 = new Ground(620,330,10,10)
  ground11 = new Ground(650,340,10,10)
  ground12= new Ground(680,350,10,10)

  ball = new Ball(530, 0, 40, 40);
  ball2 = new Ball(530, 0, 40, 40);
  ball3 = new Ball(530, 0, 40, 40);
  ball4 = new Ball(530, 0, 40, 40);
  ball5 = new Ball(530, 0, 40, 40);
  ball6 = new Ball(530, 0, 40, 40);
  ball7 = new Ball(530, 0, 40, 40);
  ball8 = new Ball(530, 0, 40, 40);
  ball9 = new Ball(530, 0, 40, 40);
  ball10 = new Ball(530, 0, 40, 40);
  ball11 = new Ball(530, 0, 40, 40);
  ball12 = new Ball(530, 0, 40, 40);
  ball13 = new Ball(530, 0, 40, 40);
  ball14 = new Ball(530, 0, 40, 40);

  

  
  


}

function draw() {
  background(40);



  text("SCORE :"+score,400,80 )

 

  
  Engine.update(engine);
  ground.display();
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
  ground7.display();
  ground8.display();
  ground9.display();
  ground10.display();
  ground11.display();
  ground12.display();
 
  
  

  
 
  
  

  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  ball10.display();
  ball11.display();
  ball12.display();
  ball13.display();
  ball14.display();

 
text("click on a ball with you mouse",700,300)
  
 



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}





function keyPressed(){
  if(keyCode === 32){
    rope.attach(this.ball)
  }
  
}

function score(){
  if(this.body, touches,box.body ){
    score++ 
}
}
