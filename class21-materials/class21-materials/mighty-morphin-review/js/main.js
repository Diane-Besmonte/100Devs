// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = 'New Year';
holiday = holiday.toUpperCase();
console.log(holiday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let word = 'Jenna Marie';
//console.log(word.slice((word.length - 3), word.length)); //can be this one or..
console.log(word.slice(-3)); // this one

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function sub(n1, n2, n3, n4, n5) {
    let total = 100 - n1 - n2 - n3 - n4 - n5;
    alert(Math.abs(total));
}

sub(27, 83, 42, 1, 5);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function getHighestLowest(num1, num2, num3) {
    console.log(`The highest number : ${Math.max(num1, num2, num3)}`);
    console.log(`The lowest number : ${Math.min(num1, num2, num3)}`);
}
getHighestLowest(10, 3, 5);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// function headsOrTail() {
//     let coin = ['head', 'tail'];
//     let get = Math.floor(Math.random() * 2);
//     return coin[get];
//   }
// OR
const headsOrTail = () => Math.random() < 0.5 ? 'heads' : 'tails';
// console.log(headsOrTail());


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function repeat(num) {
    for (let i = 1; i <= num; i++) {
        console.log(`Counter : ${i} | Result : ${headsOrTail()}`);
    }
}
repeat(3);