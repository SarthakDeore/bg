//adding play and end state
var PLAY=1;
var END=0;
var gameState=PLAY;
//adding player,goal and background and its images.
var mario,mImage;
var gem,gemImage;
var bg,bgImage;

//adding invisible ground
var invisibleLand;

//adding sounds for background and for mario
var bgmSound,jumpSound,mariodiesSound;

//adding gameover and reset variables
var gameover,overImage;
var restart,restartImage;

//adding score
var score;

function preload(){

  //loading the mario's animation
  mImage=loadAnimation("images/stand1.png","images/left.png","images/stand2.png","images/right.png");

  //loading the gem and background images
  gemImage=loadImage("images/gem.png");
  bgImage = loadImage("images/bg.jpg");

  //loading the sounds
  bgmSound=loadSound("music/bgm.mp3");
  jumpSound=loadSound("music/jump.wav");
  mariodiesSound=loadSound("music/mariodies.wav");
 
  //loading the gameover and reset images
  overImage=loadImage("images/gameover.jpg");
  restartImage=loadImage("images/restart.png");

}
function setup() {
  //creating canvas
  createCanvas(600,400);
  
 //creating sprites
  bg = createSprite(300,200,10,10);
  bg.addImage("for backgroundImage",bgImage);
  bg.scale=0.2;
  bg.velocityX=-3;

  mario = createSprite(100, 320, 50, 50);
  mario.addAnimation("for mario",mImage);
  mario.scale=0.3;

  gem = createSprite(200,320,10,10);
  gem.addImage("for gem",gemImage);
  gem.scale=0.09;
  //creating invisibleLand
  invisibleLand = createSprite(300,353,600,5);
  invisibleLand.visible=true;
  
  //creating score
  score=0;

}

function draw() {
  background("white");
 
  
   
    
      
    if(bg.x<0){
      bg.x=bg.width/2
    }
      
     if(keyDown("space")&& mario.y >= 299.5){
       mario.velocityY=-6;
       
     
    mario.velocityY=mario.velocityY+0.4;
      
    
      
      
  }
     
      
  mario.collide(invisibleLand);
 

  drawSprites();
    
  fill("red");
  text("Score: "+score,530,60);
}