# Word-Guess-Game

### About / How to Use
Guess the cookie!  This is a hangman-style word guess game where you guess different kinds of cookies.  Type any letter to start guessing.  The game will notify you if you selected a wrong letter, or replace the blank with your letter if you guessed correctly.

### Functionality
* Using javascript, we start with an array of cookie names
* We select a random cookie from our bank
* We then create a number of blanks based off of how many letters are in the selected cookie
* We use onkeyup and a for loop through the selected cookie to determine if they match
* If they match, we replace the blank line with that letter, if not, we add the letter to the wrongLetters array

### Running locally
Clone the repo onto your computer, right-click, and open in default browser.  Then you can start playing!

### Screenshot
![Word-Guess-Game](/assets/images/screenshot.png?raw=true "Word-Guess-Game")