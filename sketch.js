var bg;
var cat,catimg1,catimg2,catimg3;
var mouse,mouseimg1,mouseimg2,mouseimg3;

function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    catimg1=loadAnimation("images/cat1.png");
    catimg2=loadAnimation("images/cat2.png","images/cat3.png");
    catimg3=loadAnimation("images/cat4.png");
    mouseimg1=loadAnimation("images/mouse1.png");
    mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseimg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addAnimation("sleeping",catimg1);
    cat.scale=0.1;
    mouse=createSprite(200,600);
    mouse.addAnimation("standing",mouseimg1);
    mouse.scale=0.1;

}

function draw() {
    
    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
        cat.addAnimation("happy",catimg3);
        cat.changeAnimation("happy");
        mouse.addAnimation("happy",mouseimg3);
        mouse.changeAnimation("happy");
        cat.velocityX=0;
        
        cat.scale=0.1;
        mouse.scale=0.1;
        cat.x=300;
    }
    
    
    
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode==LEFT_ARROW){
        cat.velocityX=-5;
        cat.addAnimation("running",catimg2);
        cat.changeAnimation("running");
        mouse.addAnimation("teasing",mouseimg2);
        mouse.changeAnimation("teasing");
        mouse.frameDelay=25;
    }

}
