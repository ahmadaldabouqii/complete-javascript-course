'use strict';
/*
/////////////////////////  Default Parameters  /////////////////////////

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);


/////////////////////////  How Passing Arguments Works: Value vs. Reference  /////////////////////////

const flight = 'LH234';
const jonas = {
  name: 'Johnas Shmedtmann',
  passport: 2345345634656,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'MR. ' + passenger.name;

  if (passenger.passport === 2345345634656) alert('check In.');
  else alert('Wrong passport!');
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is The Same as doing ...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);


/////////////////////////  Functions Accepting Callback Functions  /////////////////////////
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed By: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);


/////////////////////////  Functions Returning Functions  /////////////////////////
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

console.log(greet('Hey'));

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// Challenge
const greetArr = greeting => name => {
  console.log(`${greeting} ${name}`);
};
greetArr('Hi')('Jonas');

/////////////////////////  The call and apply Methods  /////////////////////////
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, 'Ahmad AlDabouqi');
lufthansa.book(234, 'Abood Dabouqi');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does Not Work
// book(454, 'Sara Almashagbeh');

// call method
book.call(eurowings, 23, 'Sara Williams');
console.log(eurowings);

book.call(lufthansa, 654, 'Wintworth Miller');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 856, 'Mia Salameh');
console.log(swiss);

// Apply method
const flightData = [653, 'Raed AlDabouqi'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

/////////////////////////  The bind Method  /////////////////////////

// it allows us to manually set this keywords for any function call.
// Now, the difference is that bind does not immediately call the function.
// Instead it returns a new function where this keyword is bound.

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(857, 'Natheer Almahameed');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Mohammad Salah');
bookEW23('Leo Messi');

// with Event Liteners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;

const addVat = addTax.bind(null, 0.23);
// addVat = value => value + value * 0.23;
console.log(addVat(100));
console.log(addVat(23));

//Challenge
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
console.log(addVat2(23));

const addTaxRateArr = rate => value => value + value * rate;
const addVatArrow = addTaxRateArr(0.23);
console.log(addVatArrow(100));
console.log(addVatArrow(23));
*/

/////////////////////////  Coding Challenge #1  /////////////////////////

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😄
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question} \n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`poll results are ${this.answers.join(', ')}`);
    }
  },
};

// poll.registerNewAnswer();
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
