const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1643 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

const people = [
  "Beck, Glenn",
  "Becker,Carl",
  "Beckett,Samuel",
  "Beddoes,Mick",
  "Beacher, Menry",
  "Beethoven,Ludwig",
  "Begin, Menachem",
  "Belloc, Milaire",
  "Bellow,Saul",
  "Benchley,Robert",
  "Benenson,Peter",
  "Ben-Gurion,David",
  "Benjamin,walter",
  "Benn,Tony",
  "Bennington,Chester",
  "Benson,Leana",
  "Bent,Silas",
  "Bentsen,Lloyd",
  "Berger,Ric",
  "Bergman,Ingmar",
  "Berio,Luciano",
  "Berry,Halle",
  "Berry,Mendell",
  "Bethea,Erin",
  "Bevan,Aneurin",
  "Bevel,Ken",
  "Biden,Joseph",
  "Bierce,Ambrose",
  "Biko,Steve",
  "Billings,Josh",
  "Biondo,Frank",
  "Birrell,Augustine",
  "Black Elk",
  "Blair,Robert",
  "Blair,Tony",
  "Blake,william",
];

//Array.prototoype.filter()
//1. filter the list of inventors for those who were born in the 1500
const fifteen = inventors.filter(
  (inventor) => inventor.year < 1600 && inventor.year > 1499
);

console.table(fifteen);

// Array.prototype.map()
//2. Give us an array of the inventory first and last names

const fullNames = inventors.map(
  (inventor) => inventor.first + " " + inventor.last
);
console.log(fullNames);

//Array.prototype.sort()
// 3. sort the inventors by birthdate, oldest to youngest

// const ordered = inventors.sort(function (a, b) {
//   if (a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

console.table(ordered);

// Array.prototype.reduce()
//4. How many years did all the inventors live?

const totalyears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalyears);

//5. Sort the inventors by years lived

const oldes = inventors.sort((a, b) =>
  a.passed - a.year > b.passed - b.year ? -1 : 1
);

console.table(oldes);

// 6. create a list of Boulevards in paris that contain 'de' anywhere in the name
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector(".mw-category ");
// const links = Array.from(category.querySelectorAll("a"));

// const de = links
//   .map((link) => link.textContent)
//   .filter((streetName) => streetName.includes("de"));

//7 sort Exercise
// Sort the people alphabetically by last name.

const alpha = people.sort((a, b) =>
  a.split(",")[0] > b.split(",")[0] ? -1 : 1
);

console.table(alpha);

//8. Reduce Exercise
// Sum up the instances of these
const data = [
  "car",
  "car",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
// reduce  callback function의 첫번째 인자는
// {} 어레이로 시작한다.

const transportation = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(transportation);
