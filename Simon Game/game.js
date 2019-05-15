var buttonColours = ["blue", "green", "yellow","red"];
var gamePattern =[];
var userClickedPattern = [];
var level =0;
var started=false;

$(document).keypress(function(){
  if(!started)
  $("#level-title").text("Level "+level);
  nextSequence();
  started=true;
});

function nextSequence(){
  userClickedPattern=[];
  level++;
  $("#level-title").text("Level "+level);
  var randomNumber = parseInt(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

}

function checkAnswer(checkLevel){
  if(userClickedPattern[checkLevel]===gamePattern[checkLevel]){
    if(userClickedPattern.length===gamePattern.length){
      setTimeout(function(){
        nextSequence();
      },800);
    }
}
  else
  {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
    $("body").removeClass("game-over");
  },200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
  startover();
  }
}

function playSound(name){
var keySound = new Audio("sounds/"+name+".mp3");
keySound.play();
}

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});


function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  },100);
}
function startover(){
  level=0;
  gamePattern =[];
  userClickedPattern = [];
  started=false;
}
