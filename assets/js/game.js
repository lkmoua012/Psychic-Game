var compList = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var wins = 0;
var losses = 0;
var guess = 10;
var userGuess;
var compGuess;
var bank = [];
var compOldguess = "";

// SFX

var type = new Audio("assets/sound/type2.wav");
var ding = new Audio("assets/sound/ding.wav");
var buzzer = new Audio("assets/sound/buzzer.wav");

// SFX

function refresh(){

    bank = [];

    guess = 10;

    compGuess = compList[Math.floor(Math.random() * compList.length)];

    document.getElementById("win").innerHTML = wins;

    document.getElementById("loss").innerHTML = losses;

    document.getElementById("attempts").innerHTML = guess;

    document.getElementById("compGuess").innerHTML = compOldguess;

    // For debugging purposes only
   // document.getElementById("godMode").innerHTML = compGuess;

}


document.onkeypress = function(e){

    e = e || window.event;
    var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);
    if (/\d/.test(charStr)) {
        return false;
    }

    // Skeleton is done. However, the script still grabs special characters and duplicate letters.
    // That script should go here.

    userGuess = event.key;
    document.getElementById("userGuess").innerHTML = event.key;
    document.getElementById("bank").innerHTML = bank;

    if (userGuess == compGuess && userGuess!== " "){

        wins++;

        bank.push(event.key);

        ding.play();

        compOldguess = compGuess;

        document.getElementById("msg1").innerHTML = "That's right, it was " + compOldguess + "!";

        refresh();

    } else if (userGuess !== " ") {

        type.play();

        guess--;

        bank.push(event.key);

        document.getElementById("attempts").innerHTML = guess;

    };

    if (guess <= 0){

        buzzer.play();

        losses++;

        document.getElementById("msg1").innerHTML = "You lost, try again!";

        refresh();

    }

};