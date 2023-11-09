let travelBg = document.querySelector('#travel');
let philippines = document.querySelector('#philippines');
let japan = document.querySelector('#japan');
let unitedStates = document.querySelector('#united-states');
let southKorea = document.querySelector('#south-korea');

document.querySelector('.btn-ph').addEventListener('click', runPh);
document.querySelector('.btn-jpn').addEventListener('click', runJpn);
document.querySelector('.btn-us').addEventListener('click', runUS);
document.querySelector('.btn-sk').addEventListener('click', runSK);


function runPh(){
  travelBg.classList.add('hide');
	philippines.classList.toggle('hide');
	japan.classList.add('hide');
	unitedStates.classList.add('hide');
	southKorea.classList.add('hide');
}

function runJpn(){
  travelBg.classList.add('hide');
	philippines.classList.add('hide');
	japan.classList.toggle('hide');
	unitedStates.classList.add('hide');
	southKorea.classList.add('hide');
}

function runUS(){
  travelBg.classList.add('hide');
	philippines.classList.add('hide');
	japan.classList.add('hide');
	unitedStates.classList.toggle('hide');
	southKorea.classList.add('hide');
}

function runSK(){
  travelBg.classList.add('hide');
	philippines.classList.add('hide');
	japan.classList.add('hide');
	unitedStates.classList.add('hide');
	southKorea.classList.toggle('hide');
}

