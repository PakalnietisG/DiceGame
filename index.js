alert("Working!");

function randomNumber1(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    return randomNumber1;
}

function randomNumber2(){
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    return randomNumber2;
}

var player1Value = randomNumber1();
var player2Value = randomNumber2();

var diceName = "images/" + "dice" + player1Value + ".png";
document.getElementsByClassName("img1")[0].setAttribute('src', diceName);

var diceName = "images/" + "dice" + player2Value + ".png";
document.getElementsByClassName("img2")[0].setAttribute('src', diceName);

whoWins();

function whoWins() {

    if (player1Value > player2Value) {
        var outcome = document.getElementsByClassName("heading")[0].innerHTML = "⛳️ Player 1 wins!";

    }
    else if (player1Value < player2Value) {
        var outcome = document.getElementsByClassName("heading")[0].innerHTML = "Player 2 wins! ⛳️";

    }
    else if (player1Value === player2Value) {
        var outcome = document.getElementsByClassName("heading")[0].innerHTML = "It's a draw";

    }
    return outcome;   
}