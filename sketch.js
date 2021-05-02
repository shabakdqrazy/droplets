
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var maxDrops=100
var drops=[]
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
if(frameCount %150===0){
    for(var i=0;i<maxDrops;i++){
        drops.push(new Drop(random(0,400),random(0,400)));

    }
    

}
	

	Engine.run(engine);
  
}


function draw() {
    background("black")
    for(var i=0;i<maxDrops;i++){
        drops[i].showDrop();
        drops[i].updateY();
    }



drawSprites()
  
}
