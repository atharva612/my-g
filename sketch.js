var fish,fish_swimming;
var bg,bgImage;

function preload(){
fish_swimming=loadAnimation("sprites/fish.jpg");


bgImage=loadAnimation("sprites/sea.jpg");



}


function setup(){

createCanvas(1200,1200);
fish=creatSprite(600,600,20,20);
fish.addAnimation("running",fish_swimming);

bg=creatSprite(600,600,1200,1200);
bgImage.addAnimation("bgImage",bg);

fish.depth=bgImage.depth+1;

}

function draw(){
    background(bgImage);
    drawSprites();

}