const pepole = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 52423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen in my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

//array.prototype.some()// is at least one person 19?
// const isAdult = pepole.some(function (person) {
//   const currentYear = new Date().getFullYear();
//   if (currentYear - person.year >= 19) {
//     return true;
//   }
// });

//some 메서드는 배열 요소 중에서도 하나라도 특정 조건을 만족하는지
// 알고 싶을때 매우 적합한 메서드이다.

const isAdult = pepole.some(
  (person) => new Date().getFullYear() - person.year >= 19
);

console.log({ isAdult });

//array.prototype.every() // is everyone 19?
//every는 모든 요소가 트루일때 트루 리턴한다.
const allAdults = pepole.every(
  (person) => new Date().getFullYear() - person.year >= 19
);

console.log(allAdults);

// array.prototype.find()
// find is like filter, but instead returns just the one you are looking for
// find the comment with the Id of 823423

// const comment = comments.find(function (comment) {
//   if (comment.id === 823423) return true;
// });
// console.log(comment);

const newcomment = comments.find((comment) => comment.id === 823423);

console.log(newcomment);

// array.prototype.findIndex()
//find the comment with this ID
// delete the comment with the ID of 824323

const index = comments.findIndex((commet) => commet.id === 823423);
console.log(index);

comments.splice(index, 1); //(삭제할 항목위치, 삭제할 항목수)

const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
