var randomVariable1=Math.floor(Math.random() * 6) + 1;//a number between 1 and 6
var selectDice = "dice"+randomVariable1+".png";
var selectRandomDice = "images/"+selectDice;
var player1 = document.querySelectorAll("img")[0];
player1.setAttribute("src",selectRandomDice);
var randomVariable2=Math.floor(Math.random() * 6) + 1;//a number between 1 and 6
var selectDice = "dice"+randomVariable2+".png";
var selectRandomDice = "images/"+selectDice;
var player2 = document.querySelectorAll("img")[1];
player2.setAttribute("src",selectRandomDice);

if(randomVariable1>randomVariable2)
document.querySelector("h1").innerHTML = "🚩Player 1 Wins"
else if (randomVariable1<randomVariable2)
document.querySelector("h1").innerHTML = "🚩Player2 Wins"
else
document.querySelector("h1").innerHTML = "Draw!"
