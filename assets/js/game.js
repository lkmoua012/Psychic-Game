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

    document.getElementById("bank").innerHTML = bank;

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

    userGuess = event.key;
    document.getElementById("bank").innerHTML = bank;
    document.getElementById("userGuess").innerHTML = event.key;

    if (userGuess === compGuess && userGuess!== " "){

        wins++;

        bank.push(event.key);

        ding.play();

        compOldguess = compGuess;

        document.getElementById("msg1").innerHTML = "That's right, it was " + compOldguess + "!";

        refresh();

    } else if (userGuess == " " || e.which < 97 || bank.indexOf(userGuess) > -1) {

        e.preventDefault();
        return;

    } else if (e.which >= 97 && e.which <=122) { 
        
        type.play();

        guess--;

        bank.push(event.key);

        document.getElementById("attempts").innerHTML = guess;

        document.getElementById("bank").innerHTML = bank;

    };

    if (guess <= 0){

        buzzer.play();

        losses++;

        compOldguess = compGuess;

        document.getElementById("msg1").innerHTML = "You lost, try again! The letter was " + compOldguess + ".";

        document.getElementById("userGuess").innerHTML = "";

        refresh();

    }

};