const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 500; // 100px;
function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  // 우리는 div에서 이벤트 리스닝을 듣고 있는데 자식이 있을 경우
  // 다시  좌표가 0 0 부터 시작할 수 있다.
  //this는 우리가 듣고있는 div 이고  e.target은  자식이있을경우 자식 요소가 될수 있다.
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 red,
    ${xWalk}px ${yWalk * -1}px 0 rgba(255,0,255,0.7),
  ${xWalk * -1}px ${yWalk}px 0 rgba(255,255,0,0.7)
    `;
}

hero.addEventListener("mousemove", shadow);
