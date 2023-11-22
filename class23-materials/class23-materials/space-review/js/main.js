//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums.reduce((acc, cv) => acc + cv ,0))
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squared(arrNum) {
    return arrNum.map(el => Math.pow(el, 2));
}

console.log(squared([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello world'));

//Create a function that takes in a string
//Alert if the string is a palindrome or not


function palindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(palindrome('racecars'));
