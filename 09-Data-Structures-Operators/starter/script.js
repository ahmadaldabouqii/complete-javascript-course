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

/////////////////////////  For Coding Challenge #1 & #2  /////////////////////////

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

/////////////////////////  Working With Strings - Part 3  /////////////////////////
// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, LastName] = 'Jonas Schmedtmann'.split(' ');
// console.log(firstName, LastName);

const newName = ['Mr.', firstName, LastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('ahmad alDabouqi');

// Padding: padding a string means to add a number of characters to the string
// until the string has a certain desired length.
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+')); // total length is 20
console.log(message.padStart(20, '+').padEnd(30, '+')); // total length is 30

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

/*
/////////////////////////  Working With Strings - Part 2  /////////////////////////

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix Capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
console.log(loginEmail);

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUsS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUsS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


/////////////////////////  Working With Strings - Part 1  /////////////////////////

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(4, 8)); // With Space

console.log(airline.slice(airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
console.log(airline.slice(1, -2));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('AHMADE');
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Ahmad'));
console.log(typeof new String('Ahmad'));

console.log(typeof new String('Ahmad').slice(1));


/////////////////////////  For Coding Challenge #3  /////////////////////////
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2)
gameEvents.delete(64);
// console.log(gameEvents);

// 3)
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4)
for (const [min, event] of gameEvents) {
  min <= 45
    ? console.log(`[FIRST HALF] ${min}: ${event}`)
    : console.log(`[SECOND HALF] ${min}: ${event}`);
}

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

/////////////////////////  Maps: Iteration  /////////////////////////
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'JAVA'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try Again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const openingHoursMap = new Map(Object.entries(openingHours));
console.log(openingHoursMap);

// Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your Answer'));
const answer = 3;
console.log(question.get(question.get('Correct') === answer));

//Convert Map To Array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

/////////////////////////  Maps  /////////////////////////
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are Open :D')
  .set(false, 'We are Close :(');

// to read data fro a map we use get method
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(false));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest.get(arr));
console.log(rest);

/////////////////////////  Sets  /////////////////////////
const orderSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'pasta',
  'Rissoto',
  'pizza',
]);
console.log(orderSet);

// capital letter is defferent from smal letter
console.log(new Set('Ahmad'));

console.log(orderSet.size);
//check if element is exisit
console.log(orderSet.has('pizza'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
// ordersSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
const staffUniqueSpread = [...new Set(staff)];
console.log(staffUnique);
console.log(staffUniqueSpread);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('ahmad_aldabouqi'));

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

// 4)
// So the solution is to loop over the array, and add the array elements as object properties,
// and then increase the count as we encounter a new occurence of a certain element

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);


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
