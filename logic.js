// Global Variables
var cookieBank = ["snickerdoodle", "chocolatechip", "oatmealraisin", "gingersnap", "shortbread", "peanutbutter", "sugar", "biscotti", "butter", "macaroon", "fortune", "gingerbread"]
var selectedCookie = "";
var lettersInCookie = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;

// Functions

function start() {
    // select word
    selectedCookie = cookieBank[Math.floor(Math.random() * cookieBank.length)];
    // break word apart into individual letters
    lettersInCookie = selectedCookie.split("");
    // get number of blanks
    numBlanks = lettersInCookie.length;

    // Reset
    // another set of guesses
    guessesLeft = 10;
    // wrong guesses back to 0
    wrongLetters = [];
    // blanks and successes clear
    blanksAndSuccesses = [];
    
    // populate blanks and successes with right number of blanks
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    };

    // functional HTML
        // blanks per letter
    document.getElementById("cookieGuess").innerHTML = blanksAndSuccesses.join(" ");
        // guesses left
    document.getElementById("numGuesses").innerHTML = guessesLeft;
        // win count
    document.getElementById("winCounter").innerHTML = winCount;
        // loss count
    document.getElementById("lossCounter").innerHTML = lossCount;

    // Testing
    console.log(selectedCookie);
    console.log(lettersInCookie);
    console.log(numBlanks);
    console.log(guessesLeft);
    console.log(wrongLetters);
    console.log(blanksAndSuccesses);

}

start();

// get letter from keyclicks
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    alert(letterGuessed);
}

// Main Process