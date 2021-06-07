'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdayss = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdayss[3]]: {
    open: 12,
    close: 22,
  },
  [weekdayss[4]]: {
    open: 11,
    close: 23,
  },
  [weekdayss[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

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

  openingHours,
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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/////////////////////////  Coding Challenge #1  /////////////////////////

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/////////////////////////  Coding Challenge #2  /////////////////////////

// 1)
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2)
let sum = 0;
for (let x of Object.values(game.odds)) sum += x;
console.log(sum / 3);

let average = 0;
const odds = Object.values(game.odds);
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3)

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
/*
/////////////////////////  Looping Objects: Object Keys, Values, and Entries  /////////////////////////
// Property NAMES
const properties = Object.keys(openingHours);
// console.log(properties);

let openStr = `We are open on ${properties.length} days:`;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

/////////////////////////  Optional Chaining  /////////////////////////
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open); //error

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'method does not exist!');
console.log(restaurant.orderRissotto?.(0, 1) ?? 'method does not exist!');
/////////////////////////  Looping Arrays: The for-of Loop  /////////////////////////

const dobleMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of dobleMenu) console.log(item);

for (const item of dobleMenu.entries()) console.log(item);

console.log(...dobleMenu.entries());

for (const [index] of dobleMenu.entries()) console.log(index);

for (const [index, value] of dobleMenu.entries()) {
  console.log(`${index + 1}: ${value}`);
}

for (const [index, value] of dobleMenu.entries()) console.log(index, value);

for (const [, value] of dobleMenu.entries()) console.log(value);

/////////////////////////  Coding Challenge #1  /////////////////////////

// 1).
const [players1, players2] = game.players;
console.log(players1, players2);

// 2).
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3).
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4).
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5).
const {
  odds: { team1, x: draw, team2 },
} = game;

// 6.
function printGoals(...players) {
  console.log(`${players.length} goals were scored.`);
}
// printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
// printGoals('Lewandowski', 'Gnarby');
printGoals(...game.scored);

const [m, n, g, p] = game.scored;
// console.log(m, n, g, p);
printGoals(m, n, g, p);

// 7).
team1 < team2 && console.log('Team 1 is more likely to win.');
team2 > team1 && console.log('Team 2 is more likely to win.');

/////////////////////////  Short-Circuiting  /////////////////////////

console.log(`--------- OR ---------`);

console.log(3 || 'Ahmad');
console.log('' || 'Ahmad');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// console.log(restaurant);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// restaurant.numGuests = '';
restaurant.numGuests = 0;
const guests = restaurant.numGuests ?? 10;
console.log(guests);

console.log(`--------- AND ---------`);

console.log(0 && 'Ahmad');
console.log(7 && 'Ahmad');
console.log('Hello' && 23 && null && 'Ahmad');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// it's same if above,  I'm not saying that you should go ahead and replace all your if statements
// with the AND or the OR operators, so please definitely don't do that
// because it's gonna make your code very hard to read in the future.
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/////////////////////////  Rest Pattern && Rest Parameter  /////////////////////////

// 1) Destructuring

// difference between SPREAD && REST ..
// SPREAD, Because on RIGHT side of =
const arrr = [1, 2, ...[3, 4]];

//REST, Because on left side of =
const [v, h, ...others] = [1, 2, 3, 4, 5];
console.log(v, h, others);

//////////////////////////////////////////////////////////

// example(use SPREAD && REST ..)

const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherFood);

//////////////////////////////////////////////////////////

// REST WITH Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 4);
add(5, 3, 7, 2, 5, 9);

const x11 = [23, 5, 7];
add(...x11);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
/////////////////////////  Spread Operator /////////////////////////

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

const goodNewArr = [7, 8, 9, ...arr];
// console.log(goodNewArr);

//////////////////////////////////////////////////////////

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//////////////////////////////////////////////////////////

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays
const joinTwomenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(joinTwomenu);

// Iterables: arrays, strings, maps, sets. NOT Objects.
const str = 'Ahmad';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} AlDabouqi`); >>> this not gonna work, because this is not a place that expects multiple values separeted by a comma.

//////////////////////////////////////////////////////////

// spread operator with function
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2'),
//   prompt('Ingredient 3'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//////////////////////////////////////////////////////////
// spread operator with objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
/////////////////////////  Destructuring Objects /////////////////////////

const { name, openingHours: op, categories } = restaurant;
console.log(name, op, categories);

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
const obj = { a: 23, b: 7, c: 14 };
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

// Math object has many properties.
// If the lefthand side of this assignment had included a variable whose name was not a property of Math,
//  that variable would simply be assigned #undefined.
const { sin, cos, tan } = Math;
// Same as const sin=Math.sin, cos=Math.cos, tan=Math.tan
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
*/
