document.querySelector('#check').addEventListener('click', check);

function check() {

  const dayString = document.querySelector('#day').value.toLowerCase();

  //Conditionals go here
  if (dayString === "monday" || dayString === "wednesday" || dayString === "friday") {
    alert("Today is your Self Study Day!");
  } else if (dayString === "tuesday" || dayString === "thursday") {
    alert("Today is your Heartwork Day!");
  } else if (dayString === "saturday") {
    alert("Today is Google UX Day!");
  } else {
    alert("Give yourself a break!");
  }
}
