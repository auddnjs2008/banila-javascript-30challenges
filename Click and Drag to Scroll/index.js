const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft; // margin을 빼준다. 우리는 slider 안에서의 위치를 갖고 싶다.
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return; // stop the running
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft; //마우스를 움직일때 마다 계산하기 위해

  const walk = (x - startX) * 3; // 우리가 출발점으로부터 얼마나 걸어왔는지
  slider.scrollLeft = scrollLeft - walk;
});
