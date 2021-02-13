var cat1 , cat2 , cat3 , cat4 , mouse , garden , mouse1 , mouse2 , mouse3 , mouse4;
function preload() {
    //load the images here
    cat1 = loadImage("cat1.png");
    cat2 = loadImage("cat2.png");
    cat3 = loadImage("cat3.png");
    cat4 = loadImage("cat4.png");
    mouse1 = loadImage("mouse1.png");
    mouse2 = loadImage("mouse2.png");
    mouse3 = loadImage("mouse3.png");
    mouse4 = loadImage("mouse4.png");
    garden = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create cat and mouse sprites here
cat1 = new cat1(200,100,40,40);
cat2 = new cat2(200,100,50,50);
cat3 = new cat3(100,200,40,40);
cat4 = new cat4(300,100,40,40);

mouse1 = new mouse1(20,100,30,30);
mouse2 = new mouse2(70,100,10,10);
mouse3 = new mouse3(200,10,30,30);
mouse4 = new mouse4(200,100,60,60);


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
