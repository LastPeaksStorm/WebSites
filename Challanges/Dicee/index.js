function randomDice(){
    return Math.floor(Math.random() * 6 + 1);
}
var player1 = randomDice();
document.querySelector(".img1").setAttribute("src", "images/dice" + player1 + ".png");


var player2 = randomDice();
document.querySelector(".img2").setAttribute("src", "images/dice" + player2 + ".png");


if(player1 > player2){
    document.querySelector(".winner-text").innerHTML = "🚩 Player 1 Wins!";
}
else if(player1 < player2){
    document.querySelector(".winner-text").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector(".winner-text").textContent = "Draw!";
}