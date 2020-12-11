
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup;
var score=0;
var ground;
var survivalTime=0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
createCanvas(400,350); 
bananaGroup=new Group();
obstacleGroup= new Group();
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
console.log(ground.x);
  

}


function draw() {
background(220);

stroke("blue");
textSize(20);
fill("blue");
text("Score: "+score,300,50);
  
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time :"+survivalTime,25,50);
  
  
if (keyDown("space")&&monkey.y>=100) {
   monkey.velocityY=-12;  
}
monkey.velocityY=monkey.velocityY+0.8;
monkey.collide(ground);
 
if(ground.x<0){
ground.x=ground.width/2;
}
//ground.visible=false  
 food();
 obstacles();
 // if (monkey.isTouching(bananaGroup)) {
 //  score=score+1;
//}
drawSprites();
}
function food(){
if (frameCount %80 === 0){
   banana=createSprite(350,200,20,20);
   banana.y=Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.scale=0.05;  
   banana.lifetime=50;
   banana.velocityX=-6;
   bananaGroup.add(banana);
   }
}

function obstacles(){
if (frameCount %300 === 0){
   obstacle=createSprite(500,325,10,40);
   //obstacle.y=Math.round(random(120,200));
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.1;  
   obstacle.lifetime=80;
   obstacle.velocityX=-6;
   obstacleGroup.add(obstacle);
   }
}




