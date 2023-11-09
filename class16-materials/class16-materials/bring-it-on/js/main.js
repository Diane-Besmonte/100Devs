// *Variables*
// Create a variable and console log the value
let val = "Hello"
console.log(val);
// Create a variable, add 10 to it, and alert the value

let num = 5;
num = num + 10;
alert(num);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub(num1, num2, num3, num4) {
    return num1 - num2 - num3 - num4;
}

alert(sub(50, 10, 15, 5));

// Create a function that divides one number by another and returns the remainder
function div(num1, num2) {
    return num1 % num2;
}
alert(div(50, 3));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function sum(num1, num2) {
    let total = num1 + num2;
    if (total > 50) {
        alert('Jumanji');
    }
}
sum(50, 3);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mul(num1, num2, num3) {
    let total = (num1 * num2 * num3) % 3;
    if (total === 0) {
        alert('ZEBRA');
    } else {
        alert('Nah')
    }
}
mul(30, 2, 1);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function run(word, num){
    for(let i = 0; i < num; i++) {
        console.log(word);
    }
}

run('Jenna!', 10);