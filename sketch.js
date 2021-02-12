
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var treeObj;
var stoneObject;
var groundObject;
var mango1, mango2, mango3, mango4, mango5, mango6;
var world,boy, launcherObject;

var gameState = "onSling";

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	var canvas = createCanvas (1300,600);
	engine = Engine.create();
	world = engine.world;
	

	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
    
	treeObj=new tree(1010,310);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);
	stoneObject = new stone(230,400,30);
	launcherObject = new launcher(stoneObject.body,{x:200, y:150});
	
}

function draw() {

  background(230);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stoneObject.display();

  groundObject.display();
}


function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(stoneObject.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  stoneObject.fly();
  gameState = "launched";
}