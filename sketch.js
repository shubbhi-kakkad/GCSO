var speed,weight;
var thickness; 

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(400, 200, 20, 50);
  wall=createSprite(1200,230,50,200);
  speed=random(223,250);
  weight=random(30,52);
 bullet.velocityX=speed;
 bullet.shapeColor="white"
  wall.shapeColor=rgb(80,80,80)
thickness=random(22,83)

}

function draw() {
  background(0);  
  
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
var Damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(Damage>10){
  wall.shapecolor="red";
}
if(Damage<10){
  wall.shapecolor="green";
}
}
  drawSprites();

}

function hasCollided(bulletObject,wallObj){
  bulletRightedge=bulletObject.X+bulletObject.Width;
  wallLeftedge=wallObj.X;
  if(bulletRightedge>=wallLeftedge){
    return true
  }
  return false;
}