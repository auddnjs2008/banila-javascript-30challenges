const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegress = seconds * 6 + 90;
  secondHand.style.transform = `rotate(${secondsDegress}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = mins * 6 + (1 / 10) * seconds + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  let hours = now.getHours();
  if (housr > 11) {
    hours = hours - 12;
  }

  const hoursDegrees = (hours / 12) * 360 + (30 / 60) * mins + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
