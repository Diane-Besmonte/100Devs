// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let word = false;
alert(word);

// Declare a variable, reassign it to your favorite color, and console log the value
let color = "blue";
console.log(color);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
let sum = (num1, num2, num3, num4) => {
    let add = num1 + num2 + num3;
    let total = add / num4;
    return total;
}

console.log(sum(4, 15, 6, 5));
// Ans = 5

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
let pow = (num1, num2) => {
    return ans = Math.pow(num1, num2);
}

console.log(pow(4, 3));
// Ans = 64

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

let cond = (bool, str) => {
    // if (bool) { //truthy & falsy
    //     alert(str);
    // } else{
    //     console.log(str);
    // }
    bool ? alert(str) : console.log(str);
}

console.log(cond(true, "Jenna"));

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

let  all = (num) => {
    for (let val = 1; val <= num; val++) {
        if (val % 3 == 0 && val % 5 == 0) {
            console.log('FizzBuzz');
        } else if(val % 3 == 0) {
            console.log('Fizz');
        } else if(val % 5 == 0){
            console.log('Buzz');
        } else {
            console.log(val);
        }
    }
}

all(30);