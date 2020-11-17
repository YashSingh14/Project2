var zenia, tourus, cyclap, wall1, wall2, wall3, speed, weight;
function setup() {
  createCanvas(1000,600);
  thickness = random(22, 83)
  bullet1 = createSprite(100, 100, 20, 20);
  wall1 = createSprite(900, 100, thickness, 60);
  bullet2 = createSprite(100, 500, 20, 20);
  wall2 = createSprite(900, 500, thickness, 60)
  
speed = random(223, 321);
weight = random(30, 52);
}

function draw() {
  background("black");  
bullet1.velocityX = speed;
bullet2.velocityX = speed;

var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
if(wall1.x-bullet1.x < (bullet1.width+wall1.width)/2){
  bullet1.velocityX = 0;
  damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

  if(damage<10){
    wall1.shapeColor = "green"
  }

  if(damage>10){
    wall1.shapeColor = "red"
  }


}
  if(wall2.x-bullet2.x < (bullet2.width+wall2.width)/2){
    bullet2.velocityX = 0;
    damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
  
    if(damage<10){
     wall2.shapeColor = "green"
    }
  
    if(damage>10){
    wall2.shapeColor = "red"
    }
  

  }

  drawSprites();
}