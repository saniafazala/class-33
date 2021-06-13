const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var b1,b2,b3,b4,b5,b6;
var chain1,chain2,chain3,chain4,chain5;
var trainSound ;
var crashSound;
var flag = 0;
var rock;



function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
b1= new  Boggi(50,170,50,50);
b2= new  Boggi(150,170,50,50);
b3= new  Boggi(250,170,50,50);
b4= new  Boggi(350,170,50,50);
b5= new  Boggi(450,170,50,50);
b6= new  Boggi(550,170,50,50);

 rock = new Rock(1100,200,100,100);

chain1=new Chain(b1.body,b2.body);
chain2=new Chain(b2.body,b3.body);
chain3=new Chain(b3.body,b4.body);
chain4=new Chain(b4.body,b5.body);
chain5=new Chain(b5.body,b6.body);


}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  var collision=Matter.SAT.collides(b6.body,rock.body);
if(collision.collided){
flag=1;

}

if(flag==1){
textSize(30);
stroke(3);
fill("blue");
text("CRASH",500,200);
crashSound.play();

}

  b1.show();
  b2.show();
  b3.show();
  b4.show();
  b5.show();
  b6.show();

 rock.show();

 chain1.show();
 chain2.show();
 chain3.show();
 chain4.show();
 chain5.show();

  }

  function keyPressed(){
if(keyCode==RIGHT_ARROW){
Matter.Body.applyForce(b6.body,{x:b6.body.position.x,y:b6.body.position.y},{x:0.5,y:0});
trainSound.play();
}
  }
