var PLAY = 1;
var PLUTON = 2;
var NEPTUNO = 3;
var URANO = 4;
var SATURNO = 5;
var JÚPITER = 6;
var MARTE = 7;
var VENUS = 8;
var MERCURIO = 9;
var gameState = PLAY;
var fire,fireImg,fireGroup;
var fireblue,fireblueImg,fireblueGroup;
var meteorito,meteoritoImg,meteoritoGroup;
var diamante, diamanteImg, diamanteGroup;
var vidasImg, vidas, vidas2, vidas2Img, vidas3, vidas3Img;
var vidaAlien;
var astronautaStatic,astronautaSalta,astronautaGana,astronautaPierde;
var bg, bgImgPlu, bgImgNep,bgImgUra,bgImgSat,bgImgJup,bgImgMar,bgImgVen,bgImgMer;
var astronauta, astronautaImg;
var alien,alienImg,alienPistola,alienPistolaImg;
var nave,naveImg;
var disparoSound;
var naveEsp, naveEspImg, naveEsp2,naveEsp2Img, espacio, waitpluton, waitplutonImg, waittierra, waittierraImg;

function preload(){
  naveEsp2Img = loadAnimation("nave2wait.png","nave3wait.png","nave2wait.png","nave2wait.png","nave3wait.png","nave2wait.png","nave3wait.png","nave2wait.png","nave3wait.png");
  bgImgPlu= loadImage("Plutón.jpg");
  bgImgNep = loadImage("Neptuno.jpg");
  bgImgUra = loadImage("Urano.jpg");
  bgImgSat= loadImage("Saturno.jpg");
  bgImgJup = loadImage("Jupiter.jpg");
  bgImgMar = loadImage("Marte.jpg");
  bgImgVen = loadImage("Venus.jpg");
  bgImgMer = loadImage("Mercurio.jpg");

  astronautaImg = loadImage("asPistola.png");
  astronautaStatic= loadImage("astronautaStatic.png");
  astronautaSalta = loadImage("astronautaSalta.png");
  astronautaGana = loadImage("astronautaGana.png");
  astronautaPierde = loadImage("astronautaPierde.png");
  alienImg = loadImage("alienMorado.png");
  alienPistolaImg = loadImage("AlienMoradoPistola11.png");
  fireImg = loadImage("balasAs11.png");
  fireblueImg = loadImage("fuegoAzul.png");
  meteoritoImg= loadImage("meteoritoMarte.png");
  naveImg= loadImage("naveAlien2.png");
  vidasImg = loadImage("Vidas.png");
  vidas2Img = loadImage("Vidas.png");
  vidas3Img = loadImage("Vidas.png");
  disparoSound= loadSound("disparoSound.mp3");
  naveEspImg = loadImage("nave1wait.png");
  espacio = loadImage("galaxia3.webp");
  waitplutonImg = loadImage("plutonSprite.png");
  waittierraImg = loadImage("TierraSprite.png");
  diamanteImg = loadImage("diamanteSat.png");


}

function setup() {
  createCanvas(1366,617);
 
  astronauta = createSprite(1000,400,100,200);
  astronauta.addAnimation("static",astronautaStatic);
  astronauta.addAnimation("pistola",astronautaImg);
  astronauta.addAnimation("jump",astronautaSalta);
  astronauta.addAnimation("win",astronautaGana);
  astronauta.addAnimation("gameover",astronautaPierde);
  astronauta.visible=false;
  
  alien = createSprite(270,386,400,20);
  alien.addAnimation("static",alienImg);
  alien.visible=false;

  alienPistola= createSprite(270,386,400,20);
  alienPistola.addAnimation("pistola",alienPistolaImg);
  alienPistola.scale=0.7;
  alienPistola.visible=false;
  
  nave = createSprite(270,350,200,200);
  nave.addImage(naveImg);
  nave.scale=1;
  nave.visible=false;

  waittierra = createSprite(100,580,70,70);
  waittierra.addImage(waittierraImg);
  waittierra.scale=0.2;
  waittierra.visible=false;

  naveEsp = createSprite(150,400,70,70);
  naveEsp.addAnimation("moving",naveEspImg);
  naveEsp.scale=0.3;
  naveEsp.visible=false;

  naveEsp2 = createSprite(350,400,70,70);
  naveEsp2.addAnimation("spin",naveEsp2Img);
  naveEsp2.scale=0.3;
  naveEsp2.visible=false;

  waitpluton = createSprite(1200,120,70,70);
  waitpluton.addImage(waitplutonImg);
  waitpluton.scale=0.3;
  waitpluton.visible=false;
 
  diamanteGroup = new Group();
  fireGroup = new Group();
  fireblueGroup = new Group();
  meteoritoGroup = new Group();

}

function draw() {
  
  textSize(30);
  fill("white");
  text("Astronauta dispara: flecha abajo",800,30);
  text("Alien dispara: L",800,60)

  

  /*swal({ title: `¡BIENVENIDO!${"\n"} A Pluton ${"\n"} El planeta más alejado del sol `,
  text: "Listo para atacar a los aliens?", 
 imageUrl: "planeta.png",
 imageSize: "100x100", 
 confirmButtonText: "Ok" });*/
  //text("Puntuación: "+ score, 500,50);
  if(gameState === PLAY){
    background(espacio);
    fill("white");
    textSize(70);
    text("I N V A S I Ó N    A L I E N",250,300);
    textSize(30);
    text("UN RETO PARA VALIENTES, ¿ESTÁS LISTO?",400,400);
    textSize(20);
    text("Presiona S para la aventura", 600,450);
    naveEsp.visible=true;
    waitpluton.visible=true;
    waittierra.visible=true;
    astronauta.visible=false;
    alien.visible=false;
    nave.visible=false;
    
   
    if(keyDown("S")){
      naveEsp.destroy();
      naveEsp2.visible=true;
      naveEsp2.velocityY=-4;
      naveEsp2.velocityX=10;
    }else if(naveEsp2.isTouching(waitpluton)){
       gameState = PLUTON;
    }
  }else if(gameState === PLUTON){
    waittierra.visible=false;
    waitpluton.visible=false;
    naveEsp2.visible=false;
    background(bgImgPlu)
    spawnFireblue();
    spawnFire();
    
    astronauta.visible=true;
    alien.visible=true;
    nave.visible=true;
    }
  

  if(gameState === NEPTUNO){
    background(bgImgNep)
    spawnMeteorito();
  
    }

  if(gameState === URANO){
    background(bgImgUra)
   
    
      }

  if(gameState === SATURNO){
    background(bgImgSat)
    spawnDiamonds();
      
    }

  if(gameState === JÚPITER){
      background(bgImgJup)
     
    
  }

  if(gameState === MARTE){
        background(bgImgMar)
       
      
  }

  if(gameState === VENUS){
    background(bgImgVen)
   
  
  }
  if(gameState === MERCURIO){
    background(bgImgMer)
   
  
    }

  if(keyDown("DOWN_ARROW") ) {
    astronauta.changeAnimation("pistola",astronautaImg);
  } else if(keyDown("UP_ARROW"))
  astronauta.changeAnimation("jump",astronautaSalta);

  if(keyDown("L") ) {
    alien.changeAnimation("pistola",alienPistolaImg);
    alienPistola.visible=true;
    alien.visible=false;
  } 
  if(keyDown("RIGHT_ARROW")){
  alien.changeAnimation("static",alienImg)
  alien.visible=true;
  alienPistola.visible=false;
  
}

 
 /* if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);

    if(keyDown("RIGHT_ARROW") ) {
      trex.changeAnimation("party",trex_party);
    }
  
    if(keyDown("space") && trex.y >= 159) {
      trex.velocityY = -12;
    }

    
    if(keyDown("DOWN_ARROW") ) {
      trex.changeAnimation("down",trex_down);
    } else if(keyDown("space"))
    trex.changeAnimation("running",trex_running);

    
    trex.velocityY = trex.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    trex.collide(invisibleGround);
    spawnClouds();
    spawnObstacles();
    spawnAves();

    if(aveGroup.isTouching(trex)){
      gameState = END;
  }
  
    if(obstaclesGroup.isTouching(trex)){
        gameState = END;
    }
  }
  */
 
 lifeAlien();
 lifes();
  drawSprites();
}
function spawnFire() {
  //escribe el código aquí para aparecer las aves
  if (keyDown("DOWN_ARROW")) {
   // disparoSound.loop();
    fire= createSprite(850,400,60,60);
    fire.addImage(fireImg);
    fire.velocityX=-30;
    fire.lifetime=21;
    fireGroup.add(fire);
  }
  
}

function spawnFireblue() {
  //escribe el código aquí para aparecer las aves
  if (keyDown("L")) {
    disparoSound.play();
    fireblue= createSprite(390,400,60,60);
    fireblue.addImage(fireblueImg);
    fireblue.velocityX=30;
    fireblue.lifetime=21;
    fireblue.scale=0.6;
    fireblueGroup.add(fireblue);
  }
  
}
function spawnMeteorito(){
if(frameCount % 60 === 0){
  meteorito = createSprite(random(10,1360));
  meteorito.addImage("down",meteoritoImg);
  meteorito.velocityY = 19;
  meteorito.velocityX=25;
  meteorito.scale=0.2;
  meteorito.lifetime=40;
 
   meteoritoGroup.add(meteorito);
  }
  
}

function spawnDiamonds(){
  if(frameCount % 60 === 0){
    diamante = createSprite(random(10,1360));
    diamante.addImage("down",diamanteImg);
    diamante.velocityY = 19;
    diamante.velocityX=25;
    diamante.scale=0.2;
    diamante.lifetime=40;
   
     diamanteGroup.add(diamante);
    }
    
  }
 function lifes(){
 vidas = createSprite(1300,40,50,50);
 vidas.addImage(vidasImg);
 vidas.scale=0.1;
 vidas.visible=false;

 vidas2 = createSprite(1220,40,50,50);
 vidas2.addImage(vidas2Img);
 vidas2.scale=0.1;
 vidas2.visible=false;

 vidas3 = createSprite(1140,40,50,50);
 vidas3.addImage(vidas3Img);
 vidas3.scale=0.1;
 vidas3.visible=false;


 }

 function lifeAlien(){
  strokeWeight(5);
  
  vidaAlien = createSprite(600,30,500,17);
  vidaAlien.shapeColor ="black";
  vidaAlien.visible=false;

  vidaAlien10 = createSprite(580,60,450,17);
  vidaAlien10.shapeColor = "black";
  vidaAlien10.visible = false;
 
  vidaAlien9 = createSprite(570,90,400,17);
  vidaAlien9.shapeColor = "black";
  vidaAlien9.visible = false;

  vidaAlien8 = createSprite(555,120,360,17);
  vidaAlien8.shapeColor = "black";
  vidaAlien8.visible = false;
 
  vidaAlien7 = createSprite(530,150,320,17);
  vidaAlien7.shapeColor = "black";
  vidaAlien7.visible = false;

  vidaAlien6 = createSprite(510,180,270,17);
  vidaAlien6.shapeColor = "black";
  vidaAlien6.visible = false;

  vidaAlien5 = createSprite(480,210,220,17);
  vidaAlien5.shapeColor = "black";
  vidaAlien5.visible = false;

  vidaAlien4 = createSprite(459,240,170,17);
  vidaAlien4.shapeColor = "black";
  vidaAlien4.visible = false;

  vidaAlien3 = createSprite(440,270,130,17);
  vidaAlien3.shapeColor = "black";
  vidaAlien3.visible = false;

  vidaAlien2 = createSprite(400,300,80,17);
  vidaAlien2.shapeColor = "black";
  vidaAlien2.visible = false;

  vidaAlien1 = createSprite(380,340,40,17);
  vidaAlien1.shapeColor = "black";
  vidaAlien1.visible = false;

  vidaAlien0 = createSprite(370,370,20,17);
  vidaAlien0.shapeColor = "purple";
  vidaAlien0.visible = false;

 }


  
