var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup, arrowGroup2;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score =0;
function preload(){  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
}

function setup() {
  createCanvas(400, 400);
  
  //crear fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // crear arco para disparar flechas
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();  
  arrowGroup2= new Group(); 
}

function draw() {
 background(0);
  // mover el suelo
  scene.velocityX = -3 
 
  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  
  //mover el arco
  bow.y = World.mouseY
  
  // soltar la flecha al presionar la barra espaciadora
  if (keyDown("space")) {
    createArrow();  
  }
  
  //crear enemigos continuamente
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  if (arrowGroup2.isTouching(redB)) {
    
    redB.destroyEach();
    //redB.destroy();
    //redB.Each();
    //ballon.destroyEach();
    arrowGroup.destroyEach();
    arrowGroup2.destroyEach();
    score=score+1;
  }

  if (arrowGroup2.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    arrowGroup2.destroyEach();
    score=score+3;
  }

  if (arrowGroup2.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    arrowGroup2.destroyEach();
    score=score+2;
  }

  if (arrowGroup2.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    arrowGroup2.destroyEach();
    score=score+1;
  }

  drawSprites();
  text("Puntuación: "+ score, 300,50);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
}


// Crear flechas para el arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  
  var arrow2 = createSprite(100, 100, 70, 3)
  arrow2.x = 360;
  arrow2.y=bow.y - 2;
  arrow2.velocityX = -4;
  arrow2.lifetime = 100;
  //arrow2.visible = false;
  //arrowGroup.addGroup(arrow);
  //arrow.add(arrowGroup);
  //arrowGroup.add();
  arrowGroup.add(arrow);
  arrowGroup2.add(arrow2);
   
}
