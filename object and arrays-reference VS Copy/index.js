// start with strings, numbers and booleans

// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);

// let name = "Wes";
// let name2 = name;
// console.log(name, name2);

// name = "wesley";
// console.log(name, name2);

//Let's say we have an array

const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it

// const team = players;
// console.log(team);

// team[3] = "Lus";
// console.log(team);
// console.log(players);

// we have edited the original array too!!!

// WHy?  it's because that is an array reference. not an array copy.
//they both point to the same array!

// So how do we fix this? we take a copy instead!

const team2 = players.slice(); //slice를 쓰고 안에 범위를 안쓰면 전체복사를 한다.

team2[3] = "Lux";
console.log(team2);
console.log(players); // 둘이 결과가 다르다.

//on use the new ES6 Spread

const team4 = [...players];
const team5 = Array.from(players);
// 이런 식으로  복사를 할 수 있다.

// 객체에선 어떤일이 발생할까

const person = {
  name: "Wes Bos",
  age: 80,
};

// 복사본을 만들어보자.
const captain = person;
captain.number = 99;

// 이렇게 하면 person 객체에  99가 추가된다. (같은 참조)

// 그럼 어떻게 copy를 할까?
const cap2 = Object.assign({}, person, { number: 99 });
console.log(cap2);
//이런식으로 하면  person과 상관없이 number가 99인 복사본이 하나 만들어진다.

//we will hopefully soon see the object ... spread
const cap3 = { ...person };
console.log(cap3);

const wes = {
  name: "Wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer",
  },
};

console.log(wes);

const dev = Object.assign({}, wes);
// 이렇게 이중 객체를 만들고  dev.social.twitter 값을
// 바꿔 보면  원본인 wes 의 twitter값도 바뀐다.
// Object.assign은  1 depth만 적용된다.

const dev2 = JSON.parse(JSON.stringify(wes));
//이런식으로 하면 완전 복사를 하게 되는데
// 왜냐하면  stringify로  wes를 문자열로 바꾸고  이 아이를
// 다시  JSON.parse로  객체로 바꿔 주기 때문에   완전히 다른  복사본을 생성한다.

//  근데 잘 안쓴다.
