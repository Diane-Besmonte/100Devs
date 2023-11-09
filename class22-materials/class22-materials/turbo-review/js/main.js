// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let fav = ' chocolate '
console.log(fav.trim());

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let words = 'this is for my apple'
// console.log(words.includes('apple'));
console.log(words.search('apple'));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

let bot = () => {
    let select = ['rock', 'paper', 'scissors']
    return select[Math.floor(Math.random() * 3)]
    
}
// console.log(player());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
let game = (choice) => {
    return choice === 'rock' && bot() === 'scissors' ? console.log('P: Rock vs B: Scissors || Player Won!') :
    choice === 'scissors' && bot() === 'paper' ? console.log('P: Scissors vs B: Paper || Player Won!') :
    choice === 'paper' && bot() === 'rock' ? console.log('P: Paper vs B: Rock || Player Won!') : console.log('Bot Won!')
}

// console.log(game('paper'))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
let playTimes = (arr) => {
    arr.forEach(el => game(el));
}

playTimes(['rock', 'paper', 'scissors']);