//Write your pseduo code first! 
// Get the value in Celsius
// Convert Celsius to Farenheit
// Display the value
document.querySelector('#showAnswer').addEventListener('click', convert);

function convert() {
    let temp = document.querySelector('#celsius').value;
    temp = temp * 9/5 + 32;
    document.querySelector('#showFarenheit').innerText =  temp;   
}

