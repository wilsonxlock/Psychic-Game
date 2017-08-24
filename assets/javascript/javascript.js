var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0
var lose = 0
var guessLeft = 9
var computerGuess = computerChoices [Math.floor (Math.random() * computerChoices.length)]
var previous = []

document.onkeyup = function(event) {

    if (event.key == computerGuess) {
        guessLeft = 9;
        wins++; 
        alert ("You Win!");
        computerGuess = computerChoices [Math.floor (Math.random() * computerChoices.length)]
       previous = []
    }
    if (event.key != computerGuess) {
        lose++;
        guessLeft--;
        alert ("You lose!");
        previous.push (event.key)
        
    }
    if (guessLeft == 0) {
        lose++;
        alert ("You lose!");
        guessLeft = 9;
        previous = []
        }
        
        
    document.getElementById("guesser").innerHTML ="Previous guess: " + previous;
        
    document.getElementById("win").innerHTML = "wins: " + wins;
    document.getElementById("lose").innerHTML = "lose: "+ lose;
    document.getElementById("guess").innerHTML = "Guesses left: "+ guessLeft;}

    










