class Quiz {
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
          question = new Question()
          question.display();
        }
    }
    play(){
        question.hide();
    background("yellow")
    textSize(30)
    text ("result of the quiz",340,50)

        Player.getPlayerInfo();
        
        if(allPlayers !== undefined){
         var da=230
    fill("blue")
    textSize(20)
    text("contestant who answered correct is highlited green color",130,230)
          for(var plr in allPlayers){
            //add 1 to the index for every lo
            var c="2"
    
            if (c === allPlayers[plr].answer)
              
              fill("green")
              
              else
              fill("red")
              
          da=da+30
           textSize(20);
            text(allPlayers[plr].name + ": " + allPlayers[plr].answer, 205,da)
          }
    
        }






}}
