//Create a function that grabs the number of snacks from the input and tells you to stop that many times

let input = document.querySelector('#snack');
let help = document.querySelector('#help').addEventListener('click', stop);
let stops = document.querySelector('#stops'); 

function stop() {
    stops.innerText = "";
    let count = 0;

    while(count < Number(input.value)) {
        stops.innerText += " Stop";
        count++;
    }
}

stop();
