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
    // break word apart into individual letters, split("") takes away commas
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
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
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

};

// check if letter is in word
function checkLetters(letter) {
    var isLetterInCookie = false;
    for (var i = 0; i < numBlanks; i++) {
        if (selectedCookie[i] == letter) {
            isLetterInCookie = true;
        }
    }
    // check where in the word the letter exists, then populate BlanksAndSuccesses array
    if (isLetterInCookie) {
        for (var i = 0; i < numBlanks; i++) {
            if (selectedCookie[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    } else {
        wrongLetters.push(letter);
        guessesLeft--;
    }

    // testing and debugging
    console.log(blanksAndSuccesses);
    console.log("wrongLetters: " + wrongLetters);
};

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | guessesLeft: " + guessesLeft);
    // update the page with guesses left, blanks and successes, wrong guesses
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("cookieGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");
    if (lettersInCookie.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("you win!!!!!")
        // update the winCount on the page
        document.getElementById("winCounter").innerHTML = winCount;
        start();
    }
    if (guessesLeft < 1) {
        lossCount++;
        alert("you lose!!")
        // update the lossCount on the page
        document.getElementById("lossCounter").innerHTML = lossCount;
        start();
    }
};

start();

// get letter from keyclicks
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
    // testing and debugging
    console.log(letterGuessed);
};
