var fixedRect,movingRect;




function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 40, 70);
  fixedRect.shapeColor="lime";
  fixedRect.debug=true;

  movingRect=createSprite(600, 200, 70, 40);
  movingRect.shapeColor="lime";
  movingRect.debug=true;

}

function draw() {
  background(0); 

  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
     fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 &&
     movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
     fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2) {

      fixedRect.shapeColor="red";
      movingRect.shapeColor="red";
     }

     else{
      fixedRect.shapeColor="lime";
      movingRect.shapeColor="lime";
     }
  drawSprites();
}