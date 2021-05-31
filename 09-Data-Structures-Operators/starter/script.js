'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

/////////////////////////  Destructuring Objects /////////////////////////

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//////////////////////////////////////////////////////////

// change the names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values & change the names
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//////////////////////////////////////////////////////////

// mutating variables
let a = 111;
let b = 999;
const obj = { d: 23, e: 7, f: 14 };
({ a, b } = obj);
console.log(a, b);

//////////////////////////////////////////////////////////

// Nested Objects
const { fri } = openingHours;
console.log(fri);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//////////////////////////////////////////////////////////

//it's one argument(one object)!
restaurant.orderDelivery({
  time: '22:30',
  address: 'Jordan.ST, 13i',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Jordan.ST, 13i',
  starterIndex: 2,
});

/*

/////////////////////////  Destructuring Arrays /////////////////////////

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
// console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//////////////////////////////////////////////////////////


we can have a function, return an array
and then we can immediately destruct the result
into different variables.
this allows us to return multiple values from a function.

// console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

//////////////////////////////////////////////////////////

// nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [u, t]] = nested;
console.log(i, u, t);

//////////////////////////////////////////////////////////

//default values, thats can be useful when we get data from an API
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

*/

/////////////////////////  from js book  /////////////////////////

let oo = { x: 1, y: 2 }; // The object we'll loop over
for (const [name, value] of Object.entries(oo)) {
  console.log(name, value); // Prints "x 1" and "y 2"
}

// If you want to collect all unused or remaining values into a single variable when destructuring an array
let [x, ...y] = [1, 2, 3, 4, 5, 6, 7, 8]; // y == [2,3,4,5,6,7,8]
console.log(x, y);

let [first, ...rest] = 'Hello'; // first == "H"; rest == ["e","l","l","o"]
console.log(first, rest);

// Math object has many properties
// If the lefthand side of this assignment had included a variable whose name was not a property of Math, that variable
// would simply be assigned #undefined.
// Same as const sin=Math.sin, cos=Math.cos, tan=Math.tan
const { sin, cos, tan } = Math;
console.log(sin, cos, tan);

// destructuring an array of objects
// An Array of two points objects
let points = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
];
// destructured into 4 variables.
let [{ x: x1, y: y1 }, { x: x2, y: y2 }] = points;
console.log(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4); //true

//  destructure an object of arrays

let pointsObjects = { p1: [1, 2], p2: [3, 4] };
// destructured into 4 vars
const {
  p1: [xx1, yy1],
  p2: [xx2, yy2],
} = pointsObjects;
console.log(xx1 === 1 && yy1 === 2 && xx2 === 3 && yy2 === 4); // => true;

function arraycopy({
  from,
  to = from,
  n = from.length,
  fromIndex = 0,
  toIndex = 0,
}) {
  let valuesToCopy = from.slice(fromIndex, fromIndex + n);
  to.splice(toIndex, 0, ...valuesToCopy);
  return to;
}

let a1 = [1, 2, 3, 4, 5],
  b1 = [9, 8, 7, 6, 5];
console.log(arraycopy({ from: a1, n: 3, to: b1, toIndex: 4 })); // => [9, 8, 7, 6, 1, 2, 3, 5];
