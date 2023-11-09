document.querySelector('#yell').addEventListener('click', yell);

function yell() {
  let firstName = document.querySelector('#firstName').value;
  let firstMiddle = document.querySelector('#firstMiddle').value;
  let lastMiddle = document.querySelector('#lastMiddle').value;
  let lastName = document.querySelector('#lastName').value;
  
  document.querySelector('#placeToYell').textContent = `Hello there!\n ${firstName} ${firstMiddle} ${lastMiddle} ${lastName}!`;
  const synth = window.speechSynthesis;
  let yellValue = `Hello there! ${firstName} ${firstMiddle} ${lastMiddle} ${lastName}`
  const speakThis = new SpeechSynthesisUtterance(yellValue);
  synth.speak(speakThis);
}

