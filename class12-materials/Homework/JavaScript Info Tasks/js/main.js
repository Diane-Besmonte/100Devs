// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).
let admin;
let name;

name = "John";
admin = name;

alert(admin);


// Create a variable with the name of our planet. How would you name such a variable?
let ourPlanetName = "Earth"
// Create a variable to store the name of a current visitor to a website. How would you name that variable?
let currentUserName = "John";


// Rewrite the function using '?' or '||'
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

checkAge(18);

// OR
// function checkAge(age) {
//     return (age > 18) || confirm('Did parents allow you?');
//   }

// Function pow(x,n)
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// My Answer
// function min(a, b) {
//     return (a < b) ? a : b;
// }

// alert(min(2, 5));
// alert(min(3, -1));
// alert(min(1, 1));

// function pow(x, n) {
//     return Math.pow(x, n);
// }

// let num = prompt('Please enter a number:', '');
// let power = prompt('Please enter power:', '');

// confirm(pow(num, power));

// Solution
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }
