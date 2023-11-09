//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

const getEvenNumbers = (arr) => {
    let evenArr = [];
    arr.forEach(num => {
        if (num % 2 === 0) {
            evenArr.push(num);
        }
    });

    return evenArr;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6,]));
