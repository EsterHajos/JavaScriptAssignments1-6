// Assignment JAVASCRIPT LESSON 4: Math, Loops, and Arrays


// // EXERCISE 1: Guess the random number  
// Create a function guessNumberGame that generates a random number between 1 and 10.  
// The function should repeatedly prompt the user to guess the number until the correct number is guessed.  
// Use a while loop to keep asking the user for input until they guess correctly.   
//Provide feedback if the guess is too high or too low.  


const guessNumberGame = Math.floor (Math.random() * 10) +1;
let guess = null; 


while (guess !== guessNumberGame) {
    console.log(`guessNumberGame: ${guessNumberGame}. Guess: ${guess}`);


    guess=parseFloat (prompt("Guess a number 1-10"));


    if (guess < guessNumberGame) {
        console.log("Guess a higher number!");
        alert("Guess a higher number!");

    } else if (guess > guessNumberGame) {
        console.log("Guess a lower number!");
        alert("Guess a lower number!");
    }
}


console.log (`The correct number was ${guessNumberGame}. You guessed the correct number!`);
alert (`The correct number was ${guessNumberGame}. You guessed the correct number!`);