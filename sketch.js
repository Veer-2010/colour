
function setup() {
  createCanvas(400,400);
  background(5000);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  if (keyIsDown(LEFT_ARROW)) 
  {
  background("red");
  }
 
  if (keyIsDown(UP_ARROW)) 
  {
  background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
  background("green");
  }
  
  if (keyIsDown(RIGHT_ARROW)) 
  {
  background("blue");
  }

   
  drawSprites();
}

