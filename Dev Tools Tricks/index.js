const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

//Regular
console.log("hello");

//Interpolated
console.log("Hello I am a %s string!", "vvvv");
//-> 이건 ES6 백틱으로 보통 많이 쓴다.

//styled
console.log("%c I am some great text", "font-size:50px; background:purple;");

//warning!
console.warn("OPH NOWW");
console.error("Shit!");

//Info
console.info("hahahahaha");

//Testing
console.assert(1 === 2, "That is wrong!");
//consle.assert는 조건이 false 일 때만  뒤에인자를 출력

//cleaning
console.clear();

// Viewing Dom Elements
const p = document.querySelector("p");
console.log(p);
console.dir(p);

//grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`This is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

//counting

console.count("Wes");
console.count("Wes");
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Steve");

console.count("Wes");

//timing

console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs);
