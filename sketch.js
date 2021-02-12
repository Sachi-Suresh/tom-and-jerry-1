
function preload() {
    //load the images here
    bg= loadImage("images/garden.png");
    tom1= loadImage("images/cat1.png");
    tom2= loadImage("images/cat2.png");
    tom3= loadImage("images/cat3.png");
    tom4= loadImage("images/cat4.png");
    mouse1= loadImage("images/mouse1.png");
    mouse2= loadImage("images/mouse2.png");
    mouse3= loadImage("images/mouse3.png");
    mouse4= loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 tom= createSprite(870,600);
 tom.addAnimation("tomSleeping",tom1);
 tom.scale= 0.2;
 jerry= createSprite(200,600);
 jerry.addAnimation("jerryStanding",mouse1);
 jerry.scale= 0.2;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
  if(tom.x - jerry.x<(tom.width-jerry.width)/2)
  {
   tom.velocityX= 0;
   tom.addAnimation("tomlastImage",tom3);
 tom.scale= 0.2;
 tom.x= 300;
 tom.changeAnimation("tomlastImage");
 jerry.addAnimation("jerrylastImage",mouse3);
 jerry.scale= 0.15;
 jerry.changeAnimation("jerrylastImage");
  }
  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      tom.velocityX= -5;
      tom.addAnimation("tomRunning",tom2);
      tom.changeAnimation("tomRunning");
      jerry.addAnimation("jerryTeasing",mouse2);
      jerry.frameDelay= 25;
      jerry.changeAnimation("jerryTeasing");
  }

}
