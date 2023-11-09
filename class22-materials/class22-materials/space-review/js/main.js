//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr.reduce((acc, cv) => acc + cv,0));

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let squared = (arr) => {
    return arr.map(el => Math.pow(el, 2));
}
console.log(squared([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

//Create a function that takes string
//Print the reverse of that string to the console
let reverseStr = (str) => {
    return str.split('').reverse().join('');
}

console.log(reverseStr('hello'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

let palindrome = (word) => {
    return word === word.split('').reverse().join('') ? 'String is a Palindrome' : `${word} is not a palindrome`;
}

console.log(palindrome('helloworld'))