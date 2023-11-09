//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

// const arr = [2, 4, 5, 10];
// let val = 1;
// const mul = () => {
//     arr.forEach((n) => {
//         val *= n;
//         console.log(val);
//     })
// }

// mul();

// OR

const mul = (arr) => {
    let val = 1;
    arr.forEach((n) => {
        val *= n;
        console.log(val);
    })
}

mul([2, 4, 5, 10]);