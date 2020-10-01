
var pacmanimg,ghostimg,backgroundimg,ghost,food,cherry,score,pointsGroup,point,pacman,background;
function preload()
{
  groundimg=loadImage("ground2.png")
  pacmanimg=loadImage("pacman2.png")
  ghostimg1=loadImage("ghost3.png")
  ghostimg2=loadImage("bluepacman.png")
  backgroundimg=loadImage("image2.jpg")
  cherryimg=loadImage("cherry2.png")
  

}
function setup() {
  createCanvas(1600,1200);
  
  background=createSprite(1300,600,1600,1200);
  pacman=createSprite(100, 900, 50, 50);
  background.addImage(backgroundimg);
  pacman.addImage(pacmanimg);
  
  pointsGroup=createGroup();
  ghostGroup=createGroup();
  ground=createSprite(600,1100,1900,20)
  ground.velocityX = -10;
  ground.addImage(groundimg)
  
  score=0;

}


function draw() {
  
  
  background.velocityX=-5

  pacman.scale=.1;
  
  

  
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  if (background.x < 0){
    background.x = background.width/2;
  }
 
  if(keyIsDown(UP_ARROW))
  {
    pacman.y=pacman.y-8

  }
 
 
  if(keyIsDown(DOWN_ARROW))
  {
    pacman.y=pacman.y+8

  }
  if(pointsGroup.isTouching(pacman))
  {
    pointsGroup.destroyEach()
    score=score+10;
  }
  if(ghostGroup.isTouching(pacman))
  {
    background.velocityX=0;
    pointsGroup.setVelocityXEach(0);
    ghostGroup.setVelocityXEach(0);
    ground.velocityX=0; 
    
  }
  
  
  spawnPoints()
  spawnGhosts()
  drawSprites();
  fill(255,255,254);
  textSize(15);
  text("Score:"+score, 1300,200);
}
function spawnPoints()
{
  if(frameCount%100==0)
  {
    point = createSprite(1000,320,40,40);
    fill("yellow")    
    point.y = Math.round(random(100,1000));
    point.addImage(cherryimg);
    point.scale=0.2;
    
    point.velocityX = -6;
    point.lifetime=504; 
    pointsGroup.add(point);
    
  }
  
  
}
function spawnGhosts()
{
  if(frameCount%120==0)
  {
    ghost = createSprite(1000,320,20,20);
    ghost.y = Math.round(random(400,1000));
    
    var rand2 = Math.round(random(1,2));
   switch(rand2)
   {
     case 1: ghost.addImage("1",ghostimg1);
     case 2:ghost.addImage("2",ghostimg2);
     
     
   }
    
    ghost.velocityX = -5;
    ghost.lifetime=504; 
    ghost.scale=.15;
    ghostGroup.add(ghost);
    
  }
  
  
}