const div = document.querySelectorAll("div");

const button = document.querySelector("button");

function logText(e) {
  //e.stopPropagation(); //stop bubbling
  console.log(this.classList.value);
}

//document.body.addEventListener("click", logText);

div.forEach((div) =>
  div.addEventListener("click", logText, { capture: false })
);

button.addEventListener(
  "click",
  () => {
    console.log("click");
  },
  {
    once: true,
  }
);

// 이렇게 해놓고 가장 안쪽에 있는 div 박스를 클릭하면
// 가장 안쪽 박스, 그 겉 박스, 그 겉의 겉 박스.
// body까지 출력을 한다 . 이런걸  이벤트 버블링 이라고 한다.

// 단 버블링은   addEventListener을 수행중일 때 발생한다.
// 위에서  body. addEventListener 을 하지 않으면
// div 박스들만 출력된다.

// 캡처란   만일 제일 안쪽 div 박스를 클릭하면
// html -> body -> 겉의겉박스 --> 겉박스 -> 클릭박스
//이런식으로   top down 방식으로 간다. 이런걸 캡처라함

// 이제 클릭박스 까지 캡처가 일어나면
// 이제 버블 up 이 일어난다.
// 클릭박스 -> 겉박스 -> 겉겉박스  이런식으로

// 만일 우리가.  addEventListener의 세번째 인자로
// capture:true라고 하면   함수 logText는 bubble up을
// 일으키지 않는다.  capture  만 발생시킨다.

// 만일  이벤트.stopPropagation()를 하면  의미가
// stop bubbling this event up 이라는 뜻이다.
// 또한 capture: true로 하고  stopPropagation을 써도
// 한번만 일어나고 안내려간다.
// 즉  제일 바깥 박스만 출력된다.  one

//마지막으로  once가 있는데

//div.forEach(div => div.addEventListener("click",logText,{capture:false,once:true}));
//이런식으로 하면
//one->two -> three 출력이되고  다시 수만번 클릭을 할경우
// 발생하지 않는다.  즉 한번만 수행하고  안한다.
