var score;0

var bg, bgImg, gun, gunImg, redbubble, bubbleImg, waterBubble, waterBubbleImg, bullet, bulletImg, backboard, backboardImg, blastImg

var life = 3;
var gameState=1;
var gameState=1;
 
function preload(){ 
gunImg= loadImage("gun.png")
blastImg= loadImage("blast.png")
  bgImg= loadImage("bgimg.avif");
redBubbleImg= loadImage("redbubble.png");
waterBubbleImg= loadImage("waterBubble.png");
bulletImg= loadImage ("bullet1.png");
backboardImg= loadImage ("back.jpg");

}

function setup(){
  createCanvas(windowWidth,windowHeight);

backboard= createSprite(50,width/2, 100, height);
backboard.addImage(backboardImg);

  bg= createSprite( width/2,height/2, width, height );
  bg.addImage(bgImg)

  gun= createSprite( 100, height/2, 50,50 );
  gun.addImage(gunImg)
  gun.scale= 0.5

  bulletGroup= createGroup()
  redBubbleGroup= createGroup()
  waterBubbleGroup= createGroup()

  heading = createElement("h1");
  scoreboard= createElement("h1");
}

function draw(){
  background(bgImg)
  
  drawSprites()
 
if( gameState===1){
  gun.y= mouseY


  if (frameCount % 100 === 0) {
    drawredBubble();
  }
  if (frameCount % 80 === 0){
    drawwaterBubble();
  }

if (keyDown("space")) {
  shootBullet();
}

if (waterBubbleGroup.collide(backboard)){
  handleGameover(blueBubbleGroup);
}

if(redBubbleGroup.collide(backboard)){
  handleGameover(redBubbleGroup)
}

if (waterBubbleGroup.collide(bulletGroup)){
  handleBubbleCollision(waterBubbleGroup);
}

if (redBubbleGroup.collide(bulletGroup)){
  handleBubbleCollision(redBubbleGroup);
}


}
}
 function drawredBubble(){
 
  redbubble = createSprite(width+20,random(20,500),40,40);
  redbubble.addImage(redBubbleImg);
  redbubble.scale = random(0.08,0.2);
  redbubble.velocityX = random(-7,-13);
  redbubble.lifetime = 400;
  redBubbleGroup.add(redbubble);
  console.log(redbubble.x)
 }

 function drawwaterBubble(){
waterBubble= createSprite(width+20, random (30,600), 40,40 );
waterBubble.addImage(waterBubbleImg);
waterBubble.scale=random(0.07,0.19);;
waterBubble.velocityX=random(-6,-12);
waterBubble.lifetime=400;
waterBubbleGroup.add(waterBubble);
console.log(waterBubble.x);
 }

 function shootBullet(){
  bullet= createSprite(150,width/2,50,20)
  bullet.y= gun.y-15
  bullet.addImage(bulletImg)
  bullet.scale=0.01
  bullet.velocityX=30
  bulletGroup.add(bullet)
 }

  function handleBubbleCollision(bubbleGroup){
    if (life>0) {
      score= score+2;
    }
  
    blast= createSprite(bullet.x+60, bullet.y, 50, 50);
    blast.addImage(blastImg)

    blast.scale= 0.1
    blast.life=20
    bulletGroup.destroyEach()
    bubbleGroup.destroyEach()

  }

  function handleGameover(bubbleGroup){
    
  }
