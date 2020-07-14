const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

async function getVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 640, height: 480 },
    audio: true,
  });

  video.srcObject = stream;
  video.play();
}

function paintToCanvas() {
  const width = video.offsetWidth;
  const height = video.offsetHeight;
  console.log(width, height);
  canvas.width = 200;
  canvas.height = 100;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16);
}

function takePhoto() {
  //played the sound
  snap.currentTime = 0;
  snap.play();

  //take the data out of the canvas

  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "handsome");
  link.innerHTML = `<img src="${data}" alt="Handsome Man />`;
  strip.insertBefore(link, strip.firstChild);
}

getVideo();
paintToCanvas();

video.addEventListener("canplay", paintToCanvas);
