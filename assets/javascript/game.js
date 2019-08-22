var wins = 0;
var losses = 0;

const guessesMax = 9;
var guessesLeft = guessesMax;

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var targetLetter = letters[Math.floor(Math.random() * letters.length)];
// console.log("Target: " + targetLetter);

$("#guesses-left").append(" " + guessesLeft);

document.onkeyup = function (event) {

    var input = event.key.toLowerCase();

    for (i = 0; i < letters.length; i++) {
        if (input === letters[i]) {
            // Input is a valid letter.
            if (input === targetLetter) {
                // The letter matches. Player wins!
                wins++;
                resetGame();
            }
            else {
                // The letter doesn't match.
                guessesLeft--;
                if (guessesLeft !== 0) {
                    // Player hasn't lost yet
                    $("#guesses-left").text("Guesses left: " + guessesLeft);
                    $("#guesses-so-far").append(" " + input);
                }
                else {
                    // Player loses.
                    losses++;
                    resetGame();
                }
            }
        }
    }
}

function resetGame() {
    targetLetter = letters[Math.floor(Math.random() * letters.length)];
    guessesLeft = guessesMax;
    guessesSoFar = 0;
    $("#guesses-left").text("Guesses left: " + guessesLeft);
    $("#guesses-so-far").text("Your guesses so far:");
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    console.log("New target: " + targetLetter);
}