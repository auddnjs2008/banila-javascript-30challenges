/*Get our Elements */
const player = document.querySelector(".player");
const controller = document.querySelector(".player__controls");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");

const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

const expand = player.querySelector(".expand");

/* Build out functions */
function playButton() {
  if (video.paused) {
    video.play();
    toggle.innerHTML = "⏸";
  } else {
    video.pause();
    toggle.innerHTML = "▶";
  }
}

function skip() {
  const value = parseFloat(this.dataset.skip);
  video.currentTime += value;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handlePlayer() {
  controller.classList.remove("hidden");
}

function handleExpand() {
  let isFullScreen =
    document.fullscreenElement && document.fullscreenElement !== null;

  if (isFullScreen) {
    document.exitFullscreen();
  } else {
    video.requestFullscreen();
  }
}

/*Hook up the event listenrs*/

expand.addEventListener("click", handleExpand);
video.addEventListener("mouseover", handlePlayer);
video.addEventListener("mouseout", () => controller.classList.add("hidden"));

controller.addEventListener("mouseover", handlePlayer);
controller.addEventListener("mouseout", () =>
  controller.classList.add("hidden")
);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", playButton);
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

let mousedown = false;

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
