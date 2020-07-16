class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.timer = createElement('h2');
    this.greeting = createElement('h3');
    this.title = createElement('h2');
    this.reset = createButton('RESET');
  }

  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    background("green")
    this.title.html("Fruit Catcher ");
    this.title.position(displayWidth/2 - 180, 40);
    this.input.position(displayWidth/2 - 140, displayHeight/2 - 140);
    this.button.position(displayWidth/2 - 80, displayHeight/2-100);
   
    this.reset.position(displayWidth-200,50);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.title.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Welcome " + player.name +", catch as many fruits as possible until the timer runs out");
      this.greeting.position(20, displayHeight/2-200);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);

    });

  }
}
