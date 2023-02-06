let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // Your name is Alejandro and you like purple
getUserData({ firstName: "Melissa" }); // Your name is Melissa and you like green
getUserData({}); // Your name is undefined and you like green

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings",
];

console.log(raindrops); // Raindrops on roses
console.log(whiskers); // Whiskers on kittens
console.log(aFewOfMyFavoriteThings); // [Bright copper kettles, warm woolen mittens, Brown paper packages tied up with strings]

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); // [10, 30, 20];

var obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

var a = obj.numbers.a;
var b = obj.numbers.b;

const { a, b } = obj.numbers;
const {
  numbers: { a, b },
} = obj;

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

[arr[0], arr[1]] = [arr[1], arr[0]];

// Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

// first: the first element in the array
// second: the second element in the array
// third: the third element in the array
// rest: all other elements in the array

const raceResults = function (arr) {
  return { first: arr[0], second: arr[1], third: arr[2], rest: arr[3] };
};

const raceResults1 = ([first, second, third, ...rest]) => ({
  //parameter list separates indicies 0, 1, 2 from rest of them
  first, //return an object with keyname first, second, third, and rest that hold the values associated with each index
  second,
  third,
  rest,
});
