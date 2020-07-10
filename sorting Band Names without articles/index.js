const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

// 문자열 좌우에서 공백을제거하는 함수 trim
// 문자열 변환 함수  replace

function strip(bandName) {
  return bandName.replace(/^(a |The |an )/i, "").trim();
}

// function addChild(sortedBands) {
//   const bandUl = document.querySelector("#bands");
//   sortedBands.forEach((band) => {
//     const li = document.createElement("li");
//     li.innerHTML = band;
//     bandUl.appendChild(li);
//   });
// }

// addChild(sortedBands);

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));
document.querySelector("#bands").innerHTML = sortedBands
  .map((band) => `<li>${band}</li>`)
  .join("");

// 만일 위에서  join을 빼고  하면  sortedBands는 배열인데  Dom 이 toString()으로
// 문자열로 바꾸어 준다.  그렇게 되면 쉼표가 포함되는데
// 우리는 이 쉼표를 없애고 합쳐주기 위해  join("")을 사용한다.

//오늘 다룬것 -> replace함수  trim 함수  map 함수 join 함수
// 정규식
