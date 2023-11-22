// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let words = 'Hello world!'
words.charAt(words.length-1) === '?' ? console.log(words) : console.log('Not a question')

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let title = 'future jr. dev';
console.log(title.replaceAll('jr. dev', 'software engineer'))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function game() {
    let round = ['rock', 'paper', 'scissors'];
    return round[Math.floor(Math.random() * round.length)];
}

// console.log(game())
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function rockPaperScissors(choice) {
    return choice === 'rock' && game() === 'scissors' ? 'Player 1 - Rock wins!' : 
    choice === 'rock' && game() === 'paper' ? 'Bot - Paper wins!' :
    choice === 'rock' && game() === 'rock' ? 'Draw!' :
    choice === 'paper' && game() === 'rock' ? 'Player 1 - Paper wins!' : 
    choice === 'paper' && game() === 'scissors' ? 'Bot - Scissors wins!' :
    choice === 'paper' && game() === 'paper' ? 'Draw!' :
    choice === 'scissors' && game() === 'paper' ? 'Player 1 - Scissors wins!' : 
    choice === 'scissors' && game() === 'rock' ? 'Bot - Rock wins!' : 'Draw!';
}

// console.log(rockPaperScissors('paper'))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function gameRound(game) {
    return game.map(el => rockPaperScissors(el))
}

console.log(gameRound(['rock', 'paper', 'scissors']));