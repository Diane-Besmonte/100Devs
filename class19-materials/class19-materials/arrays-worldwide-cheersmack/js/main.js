//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
let arr = [];
let add = (num) => {
    for (let i = 0; i < num; i++) {
        arr[i] = i + 1;
    }
}
add(10);
console.log(arr)