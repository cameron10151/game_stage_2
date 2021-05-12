
var fireball;
var fred,fireballs;
var fredsFAnimation,fireballAnimation,fredsBAnimation;


function preload(){
   fredsFAnimation = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png",)
   fredsBAnimation = loadAnimation("9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png");
   fireballAnimation = loadAnimation("f1.png","f2.png"," f3.png","f4.png","f5.png","f6.png");
   bgimg = loadImage("BG.png")
}

function setup() {
    createCanvas(800, 500);
    fred = createSprite(50,450,20,20)
    fred.addAnimation("fred running",fredsFAnimation);
    fred.addAnimation("fred Brunning",fredsBAnimation);
    
    iground = createSprite(width/2,height,width,1);
    iground.visible = false;
    fireballs =new Group();
}



function draw(){

    background(40);
    imageMode(CENTER)
    image(bgimg,width/2,height/2)
    if(keyDown (RIGHT_ARROW)){
        fred.x = fred.x+5
        fred.changeAnimation("fred running", fredsFAnimation)
    }
    if(keyDown( UP_ARROW)&&fred.y>400){
        fred.y = fred.y-5
    }else{
        fred.velocityY=fred.velocityY+0.5  
    }

    if(keyDown(LEFT_ARROW)){
        fred.x = fred.x-5;
        fred.changeAnimation("fred Brunning", fredsBAnimation)
    }

  
    
    fred.collide(iground);
    drawSprites();
    
}

function fireBall(){
if(frameCount%40==0){
    fireball = createSprite(0, 0, .1,.1);
    fireball.addAnimation("fireaball",fireballAnimation);
    fireball.scale = 0.45
    fireball.velocityX = 15;
    fireball.velocityY = 0;
    fireball.x=fred.x;
    fireball.y=fred.y;
    fireballs.add(fireball); 
    return;
 }
}


function  mouseClicked() {
  
      fireBall();

}