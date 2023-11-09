// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let fav = 'Cheese';
fav = 'Chocolate';
alert(fav);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = 'Jenna';
alert(str.charAt(1));

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
const fun = (n1, n2, n3) => {
    return (n1 / n2) * n3; 
}

alert(fun(10, 2, 3));

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
const cbrt = (n1) => {
    return Math.cbrt(n1).toFixed(2); 
}

console.log(cbrt(10));

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

const mos = (mon) => {
    let monthStr = mon.toLowerCase();

    if(monthStr === 'march' || monthStr === 'april' || monthStr === 'may') {
        alert('YAY');
    } else {
        alert('Booo')
    }
}

mos('MARCH');

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
const skip = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i % 5 !== 0) {
            console.log(i);
        }
    }
}

skip(30);