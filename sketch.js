var space;
var spacecraft;
var UFO,UFO2,UFO3;
var UFO4,UFO5,UFO6;
var UFO7,UFO8,UFO9;
var UFO10,UFO11,UFO12;
var UFO13,UFO14,UFO15;
var UFO16,UFO17,UFO18;
var UFO19,UFO20,UFO21;

var bullet, bullet2, bullet3, bullet4, bullet5, bullet6, bullet7, bullet8, bullet9;

var UFOScore = 0;
UFOScore.hide;
var playerScore = 0;
playerScore.hide;

var bulletGroup;



var gameState = "serve";  

function preload(){
  SpaceCraftImage=loadImage("images/spacecraft.png");
  SpaceImage = loadImage("images/space.png");
  UFOImage = loadImage("images/UFO.png");
  BulletImage = loadImage("images/bullet.png");
  Bullet2Image = loadImage("images/bullet2.png");
  powerupimg = loadImage("images/powerup.png");
}

function setup(){
  
	PowerupGroup = new Group();
	bulletGroup = new Group();
}
function draw() {
  background("white");
  edges=createEdgeSprites();
  text(UFOScore,170,20);
  text(playerScore, 230,20);
 
 console.log(gameState);
 
// bullet.x=spacecraft.x, true;


  if (keyDown(RIGHT_ARROW)) {
    spacecraft.velocityX = 3;
    spacecraft.velocityY = 0;
  }
  if (keyDown(LEFT_ARROW)) {
    spacecraft.velocityX = -3;
    spacecraft.velocityY = 0;
  }
  if (gameState==="serve"){
  
  
  
    textSize(30);
    fill("green");
    textFont("Jokerman");
    text("Press Enter To Start",80,200);  

if (keyDown("ENTER")){
  gameState = "play";   
    createUFO();
    animationUFO();
    moveUFO();
  
 }
  }

if(gameState === "play") {
    
	var rand = Math.round(random(1,2));
	if(rand===1){
	  spawnpowerup1();
	}
	if(rand===2){
	 spawnpowerup2(); 
	}

  bounceUFO();
 spawnpowerup();
 /*heart.visible=true;
 heart2.visible=true;
 heart3.visible=true;*/
  
  if(keyDown("space")){
   bullet.visible = true;
   bullet.velocityY=-8;
   bullet.x=spacecraft.x;
  }
  
  if (keyDown(RIGHT_ARROW)) {
   spacecraft.velocityX = 3;
   spacecraft.velocityY = 0;
  }
  if (keyDown(LEFT_ARROW)) {
    spacecraft.velocityX = -3;
    spacecraft.velocityY = 0;
  }

  destroyUFO();
  
  if (UFOScore === 3||playerScore===21||playerScore>21){
    gameState = "over";
    
    PowerupGroup.setVisibleEach(false);
  } 
  
}


if(gameState === "over") {
	space.visible = false;
	spacecraft.visible = false;
	bullet.visible = false;

	if(UFOScore === 3){
	textSize(30);
	text("Game Over!!!", 135, 200);
	text("You LOOSE!!!", 150, 250);
	text("Press R to Restart", 80, 300);
	}

	else if(playerScore===21||playerScore>21) {
		textSize(30);
		text("Game Over!!!", 135, 200);
		text("You WON!!!", 150, 250);
		text("Press R to Restart", 80, 300);
	}

	if(keyDown("r")){
		gameState = "serve"; 
		playerScore=0;
		UFOScore=0;
	}
}

//if(bullet.y<0){
 // resetbullet();
//  UFOScore++;
//}
  
  
drawSprites();
}

function resetbullet(){
  bullet.x = spacecraft.x;
  bullet.y= spacecraft.y, true;
  bullet.velocityX = 0;
  bullet.velocityY = 0;
  
}

function createUFO() {
  
 // spacecraft.setCollider("rectangle",0,0,60,40);
  //heart=createSprite(310, 385);
  //heart2=createSprite(340, 385);
  //heart3=createSprite(370, 385);
  space = createSprite(200, 200);
  space.scale=2.5;
 spacecraft = createSprite(200, 360, 15, 15);
 spacecraft.scale=0.5;
 bullet = createSprite(spacecraft.x, 360);
 bullet.scale=0.05;
 UFO = createSprite(50, 50);
 UFO.scale=0.1;
 UFO2 = createSprite(75, 50);
 UFO2.scale=0.1;
 UFO3= createSprite(100, 50);
 UFO3.scale=0.1;
 UFO4 = createSprite(125, 50);
 UFO4.scale=0.1;
 UFO5 = createSprite(150, 50);
 UFO5.scale=0.1;
 UFO6 = createSprite(175, 50);
 UFO6.scale=0.1;
 UFO7 = createSprite(200, 50);
 UFO7.scale=0.1;
 UFO8 = createSprite(50, 100);
 UFO8.scale=0.1;
 UFO9 = createSprite(75, 100);
 UFO9.scale=0.1;
 UFO10 = createSprite(100, 100);
 UFO10.scale=0.1;
 UFO11 = createSprite(125, 100);
 UFO11.scale=0.1;
 UFO12 = createSprite(150, 100);
 UFO12.scale=0.1;
 UFO13= createSprite(175, 100);
 UFO13.scale=0.1;
 UFO14 = createSprite(200, 100);
 UFO14.scale=0.1;
 UFO15 = createSprite(50, 150);
 UFO15.scale=0.1;
 UFO16 = createSprite(75, 150);
 UFO16.scale=0.1;
 UFO17 = createSprite(100, 150);
 UFO17.scale=0.1;
 UFO18 = createSprite(125, 150);
 UFO18.scale=0.1;
 UFO19 = createSprite(150, 150);
 UFO19.scale=0.1;
 UFO20 = createSprite(175, 150);
 UFO20.scale=0.1;
 UFO21 = createSprite(200, 150);
 UFO21.scale=0.1;
  
}

function animationUFO() {
	/*heart.setAnimation("heart pixel.png_1"); 
	heart2.setAnimation("heart pixel.png_1");
    heart3.setAnimation("heart pixel.png_1");
	heart.scale=0.5;
	heart2.scale=0.5;
	heart3.scale=0.5;*/
	space.addImage(SpaceImage);
 	spacecraft.addImage(SpaceCraftImage);
 	bullet.addImage(BulletImage);
 	UFO.addImage(UFOImage);
 	UFO2.addImage(UFOImage);
 	UFO3.addImage(UFOImage);
 	UFO4.addImage(UFOImage);
 	UFO5.addImage(UFOImage);
 	UFO6.addImage(UFOImage);
 	UFO7.addImage(UFOImage);
 	UFO8.addImage(UFOImage);
 	UFO9.addImage(UFOImage);
 	UFO10.addImage(UFOImage);
 	UFO11.addImage(UFOImage);
 	UFO12.addImage(UFOImage);
 	UFO13.addImage(UFOImage);
 	UFO14.addImage(UFOImage);
 	UFO15.addImage(UFOImage);
 	UFO16.addImage(UFOImage);
 	UFO17.addImage(UFOImage);
 	UFO18.addImage(UFOImage);
 	UFO19.addImage(UFOImage);
 	UFO20.addImage(UFOImage);
 	UFO21.addImage(UFOImage);
	
}

function moveUFO() {
	UFO.velocityX = +3;
 UFO2.velocityX = +3;
 UFO3.velocityX = +3;
 UFO4.velocityX = +3;
 UFO5.velocityX = +3;
 UFO6.velocityX = +3;
 UFO7.velocityX = +3;
 UFO8.velocityX = -3;
 UFO9.velocityX = -3;
 UFO10.velocityX = -3;
 UFO11.velocityX = -3;
 UFO12.velocityX = -3;
 UFO13.velocityX = -3;
 UFO14.velocityX = -3;
 UFO15.velocityX = +3;
 UFO16.velocityX = +3;
 UFO17.velocityX = +3;
 UFO18.velocityX = +3;
 	UFO19.velocityX = +3;
 	UFO20.velocityX = +3;
 	UFO21.velocityX = +3;

}
function bounceUFO() {
	
	spacecraft.collide(edges);
	UFO.bounceOff(edges);
	UFO2.bounceOff(edges);
	UFO3.bounceOff(edges);
	UFO4.bounceOff(edges);
	UFO5.bounceOff(edges);
	UFO6.bounceOff(edges);
	UFO7.bounceOff(edges);
	UFO8.bounceOff(edges);
	UFO9.bounceOff(edges);
	UFO10.bounceOff(edges);
	UFO11.bounceOff(edges);
	UFO12.bounceOff(edges);
	UFO13.bounceOff(edges);
	UFO14.bounceOff(edges);
	UFO15.bounceOff(edges);
	UFO16.bounceOff(edges);
	UFO17.bounceOff(edges);
	UFO18.bounceOff(edges);
	UFO19.bounceOff(edges);
	UFO20.bounceOff(edges);
	UFO21.bounceOff(edges);

	UFO.bounce(UFO2);
	UFO.bounce(UFO3);
	UFO.bounce(UFO4);
	UFO.bounce(UFO5);
	UFO.bounce(UFO6);
	UFO.bounce(UFO7);
	UFO2.bounce(UFO3);
	UFO2.bounce(UFO4);
	UFO2.bounce(UFO5);
	UFO2.bounce(UFO6);
	UFO2.bounce(UFO7);
	UFO3.bounce(UFO4);
	UFO3.bounce(UFO5);
	UFO3.bounce(UFO6);
	UFO3.bounce(UFO7);
	UFO4.bounce(UFO5);
	UFO4.bounce(UFO6);
	UFO4.bounce(UFO7);
	UFO5.bounce(UFO6);
	UFO5.bounce(UFO7);
	UFO6.bounce(UFO7);
	UFO8.bounce(UFO9);
	UFO8.bounce(UFO10);
	UFO8.bounce(UFO11);
	UFO8.bounce(UFO12);
	UFO8.bounce(UFO13);
	UFO8.bounce(UFO14);
	UFO9.bounce(UFO10);
	UFO9.bounce(UFO11);
	UFO9.bounce(UFO12);
	UFO9.bounce(UFO13);
	UFO9.bounce(UFO14);
	UFO10.bounce(UFO11);
	UFO10.bounce(UFO12);
	UFO10.bounce(UFO13);
	UFO10.bounce(UFO14);
	UFO11.bounce(UFO12);
	UFO11.bounce(UFO13);
	UFO11.bounce(UFO14);
	UFO12.bounce(UFO13);
	UFO12.bounce(UFO14);
	UFO13.bounce(UFO14);
	UFO15.bounce(UFO16);
	UFO15.bounce(UFO17);
	UFO15.bounce(UFO18);
	UFO15.bounce(UFO19);
	UFO15.bounce(UFO20);
	UFO15.bounce(UFO21);
	UFO16.bounce(UFO17);
	UFO16.bounce(UFO18);
	UFO16.bounce(UFO19);
	UFO16.bounce(UFO20);
	UFO16.bounce(UFO21);
	UFO17.bounce(UFO18);
	UFO17.bounce(UFO19);
	UFO17.bounce(UFO20);
	UFO17.bounce(UFO21);
	UFO18.bounce(UFO19);
	UFO18.bounce(UFO20);
	UFO18.bounce(UFO21);
	UFO19.bounce(UFO20);
	UFO19.bounce(UFO21);
	UFO20.bounce(UFO21);
}
function destroyUFO() {
	if(bullet.isTouching(UFO)){
	  UFO.destroy(bullet); 
	  resetbullet();
	  playerScore++;
	  
	}
	 
	if(bullet.isTouching(UFO2)){
	  UFO2.destroy(bullet); 
	resetbullet();
	playerScore++;
	
	}
	if(bullet.isTouching(UFO3)){
	  UFO3.destroy(bullet); 
	  resetbullet();
	  playerScore++;
	 
	}
	if(bullet.isTouching(UFO4)){
	  UFO4.destroy(bullet); 
	  resetbullet();
	  playerScore++;
	 
	}
	if(bullet.isTouching(UFO5)){
	 UFO5.destroy(); 
	  resetbullet();
	  playerScore++;
	  
	}
	if(bullet.isTouching(UFO6)){
	  UFO6.destroy(bullet); 
	  resetbullet();
	  playerScore++;
	 
	}
	if(bullet.isTouching(UFO7)){
	  UFO7.destroy(); 
	  resetbullet();
	  playerScore++;
	  
	}
	if(bullet.isTouching(UFO8)){
	  UFO8.destroy(bullet); 
	  resetbullet();
	  playerScore++;
	}
	if(bullet.isTouching(UFO9)){
	  UFO9.destroy(bullet); 
	  resetbullet();
	  playerScore++;
	}
	if(bullet.isTouching(UFO10)){
	  UFO10.destroy(bullet); 
	  resetbullet();
	  playerScore++;
	}
	if(bullet.isTouching(UFO11)){
	  UFO11.destroy(); 
	  resetbullet();
	 
	  playerScore++;
	}
	if(bullet.isTouching(UFO12)){
	  UFO12.destroy(); 
	  resetbullet();
	  
	  playerScore++;
	}
	if(bullet.isTouching(UFO13)){
	  UFO13.destroy(bullet); 
	  resetbullet();
	  playerScore++;
	  
	}
	if(bullet.isTouching(UFO14)){
	  UFO14.destroy(bullet); 
	  resetbullet();
	  playerScore++;
	  
	}
	if(bullet.isTouching(UFO15)){
	  UFO15.destroy(bullet); 
	  resetbullet();
	  playerScore++;
	 
	}
	if(bullet.isTouching(UFO16)){
	  UFO16.destroy(bullet); 
	  resetbullet();
	  playerScore++;
	 
	}
	 if(bullet.isTouching(UFO17)){
	  UFO17.destroy(bullet); 
	  resetbullet();
	  playerScore++;
	 
	}
	if(bullet.isTouching(UFO18)){
	  UFO18.destroy(); 
	  resetbullet();
	  playerScore++;
	  
	}
	if(bullet.isTouching(UFO19)){
	  UFO19.destroy(); 
	  resetbullet();
	  playerScore++;
	  
	}
	if(bullet.isTouching(UFO20)){
	  UFO20.destroy();
	  resetbullet();
	  playerScore++;
	  
	}
	if(bullet.isTouching(UFO21)){
	 UFO21.destroy(); 
	  resetbullet();
	  playerScore++;
	  
	}
	if(bullet.y<0){
	   resetbullet();
	  UFOScore++;
	  
	}
	/*if(UFOScore===1){
	  heart.destroy();
	}
	if(UFOScore===2){
	  heart2.destroy();
	}
	if(UFOScore===3){
	  heart3.destroy();
	}*/
	if(bulletGroup.isTouching(spacecraft)){
	  UFOScore++;
	  bulletGroup.destroyEach();
	}
}
	function spawnpowerup(){
  if(World.frameCount%20===0){
     var powerup= createSprite(400, Math.round(random(170, 230)), 10, 10);
     powerup.addImage(powerupimg);
     powerup.velocityX = -3;
     
     powerup.lifetime=134;
     PowerupGroup.add(powerup);
    
    
}
}
function spawnpowerup1(){
  if (PowerupGroup.isTouching(bullet)){
    resetbullet();
    PowerupGroup.destroyEach();
   
    UFO.destroy();
    UFO2.destroy();
    UFO3.destroy();
    UFO4.destroy();
    UFO5.destroy();
    UFO6.destroy();
    UFO7.destroy();
	playerScore=playerScore+7;
	if(playerScore===18){
	 playerScore=playerScore+3;
	}
  }
}
 function spawnpowerup2(){
   if (PowerupGroup.isTouching(bullet)){
    
	 var bullet2=createSprite(60,0);
	 bullet2.scale=0.05;
	 var bullet3=createSprite(120,0);
	 bullet3.scale=0.05;
     var bullet4=createSprite(180,0);
	 bullet4.scale=0.05;
	 var bullet5=createSprite(240,0);
	 bullet5.scale=0.05;
	 var bullet6=createSprite(300,0);
	 bullet6.scale=0.05;
	 var bullet7=createSprite(360,0);
	 bullet7.scale=0.05;
	 var bullet8=createSprite(420,0);
	 bullet8.scale=0.05;
	 var bullet9=createSprite(480,0);
	 bullet9.scale=0.05;
	 bullet2.addImage(Bullet2Image);
     bullet3.addImage(Bullet2Image);
     bullet4.addImage(Bullet2Image);
     bullet5.addImage(Bullet2Image);
     bullet6.addImage(Bullet2Image);
     bullet7.addImage(Bullet2Image);
     bullet8.addImage(Bullet2Image);
     bullet9.addImage(Bullet2Image);
     bulletGroup.add(bullet2);
     bulletGroup.add(bullet3);
     bulletGroup.add(bullet4);
     bulletGroup.add(bullet5);
     bulletGroup.add(bullet6);
     bulletGroup.add(bullet7);
     bulletGroup.add(bullet8);
     bulletGroup.add(bullet9);
     bulletGroup.setVelocityYEach(3);
    resetbullet();
    PowerupGroup.destroyEach();
   }
}
