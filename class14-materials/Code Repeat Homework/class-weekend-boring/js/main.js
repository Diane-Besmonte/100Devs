//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check);

function check() {
  let day = document.querySelector('#day').value.toLowerCase();
  let placeToSee = document.querySelector('#placeToSee');

  if (day == 'monday' || day == 'wednesday' || day == 'friday') {
    placeToSee.innerText = '#100Devs Study Day!';
  } else if (day == 'saturday') {
    placeToSee.innerText = 'Google UX Coursera Day!';
  } else if (day == 'tuesday' || day == 'thursday') {
    placeToSee.innerText = 'Web Dev Team Session!';
  } else {
    placeToSee.innerText = 'Enjoy your Rest Day!';
  }
}