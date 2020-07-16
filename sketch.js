var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var xPosition = 0;
var database;

var form, player, game;

var baskets,basket1,basket2,basket3,fruitGroup1,fruitGroup2,fruitGroup3;

var bg,bg2, basket1_img, basket2_img,basket3_img,fruit1Img,fruit2Img,fruit3Img;
var timer =500;
function preload(){
 bg=loadImage("images/bg.jpeg")
 
 basket1_img=loadImage("images/b2.png")
 basket2_img=loadImage("images/b2.png")
 basket3_img=loadImage("images/b3.png")
 fruit1Img=loadImage("images/fruit1.png");
 fruit2Img=loadImage("images/fruit2.png");
 fruit3Img=loadImage("images/fruit3.png");

}

function setup(){
  canvas = createCanvas(displayWidth - 80, displayHeight-80);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  fruitGroup1=new Group();
  fruitGroup2=new Group();
  fruitGroup3=new Group();
}


function draw(){
  
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  if(fruitGroup1.collide(basket1)){ 
  
   fruitGroup1.destroyEach();
  
  }

  if(fruitGroup2.collide(basket2)){
   
    fruitGroup2.destroyEach();
    
  }
  if(fruitGroup3.collide(basket3)){
  
    fruitGroup3.destroyEach();
    
 
  }
}
