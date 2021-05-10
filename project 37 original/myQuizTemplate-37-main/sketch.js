var canvas;
var gameState=0;
var playerCount;
var quiz,question,player;
var database;
var allPlayers
var answer

function setup(){
  canvas = createCanvas(850,500);
  database=firebase.database()
  quiz=new Quiz()

  quiz.getState()
  quiz.start()

 

}


function draw(){
  background("pink");
if(playerCount===2){
quiz.update(1)

}
  if (gameState===1){

    clearInterval()
    quiz.play()

  }
}
