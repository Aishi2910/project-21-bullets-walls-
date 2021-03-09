var bullet;
var canvas;
var speed;
var weight;
var thickness;
var damage;


function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  //bullet
  bullet=createSprite(500,200,50,50);
  bullet.velocityX = speed;
  bullet.weight=weight;

  //wall
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background("black"); 
  
  if(hasCollided(bullet,wall)){
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    bullet.velocityX=0
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
}
drawSprites();
}
  
  

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
