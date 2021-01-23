
var canvas;
var music;

function preload(){

    music = loadSound("music.mp3");

}


function setup(){

    canvas = createCanvas(800,600);

    q1 = createSprite(100, 570, 190, 25);
    q1.shapeColor = "red";
    
    q2 = createSprite(300, 570, 170, 25);
    q2.shapeColor = "blue";

    q3 = createSprite(490, 570, 170, 25);
    q3.shapeColor = "green";

    q4 = createSprite(690, 570, 190, 25);
    q4.shapeColor = "purple";

    a1 = createSprite(400, 0, 800, 5);
    a2 = createSprite(800, 300, 5, 600);
    a3 = createSprite(0, 300, 5, 600);

    box = createSprite(random(20, 750), 20, 25, 25)
    box.shapeColor = "white";
    box.velocityX = random(-5);
    box.velocityY = (10);

    aGroup = new Group();

    aGroup.add(a1);
    aGroup.add(a2);
    aGroup.add(a3);

}

function draw() {

    background(rgb(169,169,169));

    box.bounceOff(aGroup);

    if(box.isTouching(q1) && box.bounceOff(q1)){
      
      box.shapeColor = "red";
      music.stop();
      box.velocityY = 0;
      box.velocityX = 0;

    }

    if(box.isTouching(q2) && box.bounceOff(q2)){
        
      box.shapeColor = "blue";
      music.play();

    }

    if(box.isTouching(q3) && box.bounceOff(q3)){
        
      box.shapeColor = "green";
      music.play();

    }

    if(box.isTouching(q4) && box.bounceOff(q4)){
        
      box.shapeColor = "purple";
      music.stop();
      box.velocityY = 0;
      box.velocityX = 0;

    }

    drawSprites();

}
