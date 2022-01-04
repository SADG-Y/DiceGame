var diceNum1 = Math.floor(Math.random() * 7);
var diceNum2 = Math.floor(Math.random() * 7);

function DiceRoller() {
    if (diceNum1 == 0) {
        diceNum1 += 1;
    } else if (diceNum2 == 0) {
        diceNum2 += 1;
    }
    var randomDice1 = "images/dice" + diceNum1 + ".png"
    var randomDice2 = "images/dice" + diceNum2 + ".png";
    var dice1 = document.getElementsByClassName("img1")[0];
    var dice2 = document.getElementsByClassName("img2")[0]

    dice1.setAttribute("src", randomDice1);
    dice2.setAttribute("src", randomDice2);
}

function winDecider() {
    var heading = document.querySelector(".container h1");

    if (diceNum1 > diceNum2) {
        heading.innerText = "Player 1 wins!";
    } else if (diceNum1 == diceNum2) {
        heading.innerText = "It's a tie!";
    } else { heading.innerText = "Player 2 wins!"; }
}

DiceRoller();
winDecider();