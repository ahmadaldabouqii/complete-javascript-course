'use strict';

/* 
//////////////////////////////    Scoping in Practice    //////////////////////////////

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();


//////////////////////////////    Hoisting and TDZ in Practice    //////////////////////////////
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

//////////////////////////////    this keyword in Practice    //////////////////////////////
console.log(this); //Window

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
  // => undefined; because we are in strict mode. Remember that in sloppy mode,it would be also the global object(window object).
  // So in this normal function it's get own this keywords.
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
  // => Window; because the arrow function does not get its own this keyword.
  // So instead the arrow function simply uses the lexical this keyword, which means that it uses the this keyword of its parent function or of its parents scope.
  // in this case, what is the lexical, this keyword? So what is the this keywords in the parent's scope of this function?
  // Well, it is window because window is the this keywords here in the global scope.
  // So in this case, this, this keyword here will simply point to the this keyword in the global scope.And so therefore it will point to window.
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    // when we have a method call, the this keyword inside of the method will be the object that is calling the method.
    // And in this case, that's the Jonas object, So Jonas here is basically the owner of the method.
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // we simply copy the calcAge method from Jonah's to Matilda.(method borrowing).
matilda.calcAge();

const f = jonas.calcAge;
f();
