const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');

const launch = "14 Feb 2024";

function countdown(){
  const launchDate = new Date(launch);
  const currentDate = new Date();

  const totalSeconds = (launchDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds/ 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds/ 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds)
}

function formatTime(time){
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000)

