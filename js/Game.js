class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

 basket1 = createSprite(250,displayHeight/2);
 basket1.addImage("1", basket1_img);
 
 basket2 = createSprite(400,displayHeight/2);
 basket2.addImage("2",basket2_img);
 
 basket3 = createSprite(600,displayHeight/2);
 basket3.addImage("2",basket3_img);

    baskets = [basket1, basket2, basket3];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    
    
    if(allPlayers !== undefined){
      background("lightblue");
      image(bg, 0,0,displayWidth, displayHeight);
      
      var index = 0;

      var x = 200;
      var y=500;

      for(var plr in allPlayers){

        index = index + 1 ;
        form.timer.html("Timer: "+timer);
        form.timer.position(50,20);
        x=x+200;
        x =  allPlayers[plr].xPosition;
        baskets[index-1].x = x;
        baskets[index-1].y = y;
        baskets[index-1].visible=false;
        if (index === player.index){
          baskets[index-1].visible=true;
          fill("red");
          ellipse(x,y+70,200,80);
          
        if(timer>0){
          timer=timer-1;
        if(frameCount % 60 === 0){  
             var fruits1=createSprite(random(100,400),60,40,40);
             fruits1.velocityY=12;
             fruits1.addImage(fruit1Img);
             fruits1.scale =0.4;
             fruits1.debug=true;
            fruitGroup1.add(fruits1)
         
        }
        if(frameCount % 60 === 0){
            
          var fruits2=createSprite(random(400,700),60,40,40);
          fruits2.velocityY=12;
          fruits2.addImage(fruit2Img);
          fruits2.scale =0.5;
          fruits2.debug=true;
      
          fruitGroup2.add(fruits2)
      
     }
     if(frameCount % 60 === 0){
            
      var fruits3=createSprite(random(800,1280),60,40,40);
      fruits3.velocityY=12;
      fruits3.debug=true;
      fruits3.addImage(fruit3Img);
      fruits3.scale =0.4;
      fruitGroup3.add(fruits3)
  
 }
}else{
  gameState =2;
}
      }
       

      }

    }


   
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.xPosition -=20
      player.update();
    }
   

   
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.xPosition +=20
      player.update();
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");  
    
  }
}
