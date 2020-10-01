
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score = 0;
var survivalTime = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(450,400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX = -8;
  ground.x = ground.width/2;
  console.log(ground.x)
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
background(220);
monkey.collide(ground);
food();
obstacles();
  
if(ground.x < 0 ){
  ground.x = ground.width/2;
}
  
if(keyDown("Space")&& monkey.y >= 100) {
     monkey.velocityY = -12;
   }
  
monkey.velocityY = monkey.velocityY + 0.8
  
  if(monkey.isTouching(bananaGroup)){
       banana.destroy();
       score = score + 1;
     }
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.velocityY = 0;
    ground.velocityX = 0;
   obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
    survivalTime =Math.ceil(frameCount/frameRate(0));
  }
  
 stroke("black");
textSize(20);
  fill("black");
  text("Score: "+score,300,50);
  
stroke("black");
textSize(20);
  fill("black");
  survivalTime =Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,50,50);
  
drawSprites();
}
function food(){
  if(frameCount % 80 === 0 ){
  banana = createSprite(350,100,10,10);
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -4;
  bananaGroup.add(banana);
  banana.lifetime = 100;
    }
}
function obstacles(){
  if(frameCount % 300 === 0){
  obstacle = createSprite(200,330,10,10);
  obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
  obstacle.velocityX = -6;
  obstacleGroup.add(obstacle);
  obstacle.lifetime = 150;
  }
}





