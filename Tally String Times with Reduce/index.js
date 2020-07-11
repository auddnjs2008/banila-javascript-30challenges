const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

// reduce 함수
//array.reduce(callbackFunction(previousValue, currentValue, currentIndex, array1), initialValue);
//initialvalue 값은 처음 previousValue 값을 나타낸다.
// initialvalue 값이 없을경우  previousValue는  배열의 첫째 값
// currentValue는 현재 처리되는 값
// callbackFunction에 의해 반환되는 값이 다음의 previousValue 값이 된다.
// 위의 예를 보면은 [숫자1,숫자2,숫자3].reduce(total,seconds)
// 면 처음에  total = 숫자1  seconds = 숫자2
// 다음 total 값은  숫자1+숫자2  다음 seconds 값은 숫자3
// 결론적으로  총 합이 된다.

let secondsLeft = seconds;
const hours = Math.floor(seconds / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);
