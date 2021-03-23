var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1000,400);
  thickness=random(22,83)
   speed=random(223,321)
   weight=random(30,52) 
   bullet=createSprite(100,200,100,50)
   bullet.shapeColor="White"
   bullet.velocityX=speed
   wall=createSprite(800,200,thickness,height/2);
   wall.shapeColor=color(80,80,80)
}

function draw() {
  background(255,255,255);
  if(hasCollided(bullet,wall))
 {
   bullet.velocityX=0;
   var damage=0.5 *weight * speed * speed/(thickness * thickness * thickness);

 if(damage>10)
 {
   wall.shapeColor=color(255,0,0);

 }

 if(damage<10)
 {
   wall.shapeColor=color(0,255,0);
 }  } 
  drawSprites();
}
function hasCollided (bullet1,wall1)
{bulletRightEdge=bullet1.x+bullet1.width;
  wallLeftEdge=wall1.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }

    return false;
  }
 
 
