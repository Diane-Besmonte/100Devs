// *Variables*
// Create a variable and console log the value
let consoleText = "Hello! I'm the value";
console.log(consoleText);
// Create a variable, add 10 to it, and alert the value
let alertText = "Hello! I'm the value";
alert(alertText);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub(num1, num2, num3, num4) {
    let ans = num1 - num2 - num3 - num4;
    alert(ans);
}

sub(20, 10, 5, 2);

// Create a function that divides one number by another and returns the remainder
function div(num1, num2) {
    return num1 % num2;
}

console.log(div(20, 3));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(num1, num2) {
    let total = num1 + num2;
    if (total > 50) {
        alert('Jumanji');
    }
    else {
        alert('Nah Mate!')
    }
}

console.log(jumanji(60, 10));

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mul(num1, num2, num3) {
    let product = num1 * num2 * num3;
    if (product % 3 == 0) {
        alert('Zebra');
    }
    else {
        alert('Product Not Divisible by 3!')
    }
}

console.log(mul(5, 1, 3));