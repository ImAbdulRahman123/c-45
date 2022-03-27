var bg,bgImg;
var player, shooterImg, shooter_shooting; 
var zombie_img , zombie;
var heart_img1 , heart_img2 , heart_img3;
var heart_1 , heart_2 , heart_3
var bomb_img , bomb


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombie_img=loadImage("assets/zombie.png")
  heart_img1=loadImage("assets/heart_1.png")
  heart_img2=loadImage("assets/heart_2.png")
  heart_img3=loadImage("assets/heart_3.png")
  bomb_img=loadImage("assets/bomb-removebg-preview.png")

  bgImg = loadImage("assets/bg.jpeg")


}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

zombie = createSprite(displayWidth/2-100, Math.round(random(0,600)),30,30);
zombie.addImage(zombie_img);
  zombie.scale = 0.2

bomb = createSprite(zombie.width,zombie.height,5,5);
bomb.addImage(bomb_img);
  bomb.scale = 0.1
bomb.visible=false;





}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if(keyDown("LEFT_ARROW")|| touches.length>0){
  player.x=player.x-30
}
if(keyDown("RIGHT_ARROW")|| touches.length>0){
  player.x=player.x+30
}

if(keyDown("S")||touches.length>0){
  zombie.y = zombie.y-30
}
if(keyDown("W")||touches.length>0){
  zombie.y = zombie.y+30
}
if(keyDown("A")||touches.length>0){
  zombie.x = zombie.x-30
}
if(keyDown("D")|| touches.length>0){
  zombie.x = zombie.x+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

if(keyWentDown("0")){

  
}



//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}



drawSprites();

}
