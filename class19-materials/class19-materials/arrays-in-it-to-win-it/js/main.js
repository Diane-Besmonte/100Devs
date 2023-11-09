//Create an array of movies with at least three movies.
let movies = ['Baby Sitter', 'Fallout', 'American Carnage', 'You'];
//Using the array from above, store the first movie in a variable
let first = movies[0];
//Get the length of the original array and store it in a new variable
let len = movies.length;
//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
let last = movies[len - 1];

console.log(first, len, last);