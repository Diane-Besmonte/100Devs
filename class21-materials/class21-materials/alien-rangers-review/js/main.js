//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let shows = ['Wednesday', 'Fallout', 'Scream VI', 'You', 'Baby Sitter']; 

shows.forEach(x => console.log(x));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

console.log(nums.filter(x => x % 2 === 0));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

const sum = (arr) => {
    let sorted = arr.sort((a, b) => a-b);
    alert(sorted[1] + sorted[sorted.length - 2])
}

sum([20, 10, 5, 3, 50, 40, 30]);