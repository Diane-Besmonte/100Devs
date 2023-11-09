// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

let arr = [12, 8, 13, 7, 12, 12];
let firstNumber = arr[0];
let lastNumber = arr[arr.length - 1];

const lessFunc = () => {
    if (firstNumber < lastNumber) {
        alert('Hi');
    } else if (firstNumber > lastNumber) {
        alert('Bye');
    } else {
        alert('We close in an hour');
    }
}

lessFunc();