'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data (Assuming data comes from web API which are nothing but objects)
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">
        ${i + 1} ${type}</div>
        <div class="movements__value">${mov}???</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}???`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}???`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}???`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(interest => interest >= 1)
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${interest}???`;
};

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);

const updateUI = function (acc) {
  // display movements
  displayMovements(acc.movements);
  // display balance
  calcDisplayBalance(acc);
  // display summary
  calcDisplaySummary(acc);
};

// Event Handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and wlc message
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear the input Fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
  labelWelcome.textContent = 'Log in to get started';
});

let timesClicked = 0;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  timesClicked++;
  if (timesClicked % 2 == 0) {
    //Sorting
    currentAccount.movements.sort((a, b) => a - b);
  } else {
    currentAccount.movements.sort((a, b) => b - a);
  }

  //Update UI
  updateUI(currentAccount);
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////   141. Simple Array Methods   /////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE METHOD
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); //Shallow Copy OF arr
// console.log([...arr]); //Shallow Copy OF arr

// SPLICE

// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join('-'));

*/
/*
/////////////////////////////////////////////////   142. Looping Arrays: forEach   /////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('<----------FOREACH---------->');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

*/
/////////////////////////////////////////////////   143. forEach With Maps and Sets   /////////////////////////////////////////////////

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
// _ => which in JavaScript means a throwaway variable. So that means a variable that is completely unnecessary.
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});

/*
/////////////////////////////////////////////////   Coding Challenge #1   /////////////////////////////////////////////////

// a shallow copy is a copy in which if we make any changes
// then in the original also the changes will get reflected, usually in case of objects.

const checkDogs = function (dogsJulia, dogsKate) {
  const CatsJulia = dogsJulia.slice(1, -2);
  const dogs = [...CatsJulia, ...dogsKate];
  dogs.forEach(function (dog, i) {
    dog >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
      : console.log(`Dog number ${i + 1}  is still a puppy????`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('===============================================================');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


/////////////////////////////////////////////////   148. The map Method   /////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUsd;
// });
const movementsUSD = movements.map(mov => mov * euroToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDForOf = [];
for (const mov of movements) {
  movementsUSDForOf.push(mov * euroToUsd);
}
console.log(movementsUSDForOf);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

/////////////////////////////////////////////////  150. The filter Method   /////////////////////////////////////////////////

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

/////////////////////////////////////////////////  151. The reduce Method   /////////////////////////////////////////////////

// const balance = movements.reduce(function (accum, cur, i, arr) {
//   console.log(`Iteration ${i}: ${accum}`);
//   return accum + cur;
// }, 0);

const balance = movements.reduce((accum, cur) => accum + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value

const max = movements.reduce((acc, mov, i) => {
  // console.log(`Iteration ${i}: ${acc} ${mov}`);
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

/////////////////////////////////////////////////  Coding Challenge #2   /////////////////////////////////////////////////

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(dog => (dog <= 2 ? 2 * dog : 16 + dog * 4));
  const adults = humanAges.filter(age => age >= 18);
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
};
const avg1 = calcAverageHumanAge([1, 2, 6, 7, 8]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

/////////////////////////////////////////////////  153. The Magic of Chaining Methods   /////////////////////////////////////////////////

const euroToUsd = 1.1;
const totalDepositesUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositesUSD);

/////////////////////////////////////////////////  Coding Challenge #3   /////////////////////////////////////////////////

const calcAverageHumanAge = ages =>
  ages
    .map(dog => (dog <= 2 ? 2 * dog : 16 + dog * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0); // adults length

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

/////////////////////////////////////////////////  155. The find Method   /////////////////////////////////////////////////

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') console.log(acc);
}

/////////////////////////////////////////////////  159. some and every   /////////////////////////////////////////////////

// Some METHOD
console.log(movements);

// Checks/test for QUALITY
console.log(movements.includes(-130));

// Checks for condition
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// Every METHOD
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate CallBack

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.filter(deposit));
console.log(movements.every(deposit));

/////////////////////////////////////////////////  160. flat and flatMap   /////////////////////////////////////////////////

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // default level deep is 1 (goes 1 level deep)

const arrDeep = [[[1, 2], 3], [[4, 5], 6], 7, 8];
console.log(arrDeep.flat(2)); // like this, goes 2 level deepth

// flat
const overallBalnace = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalnace);

// flatMap > only geos one level deep and we cannot change it

const overallBalnace2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalnace2);


/////////////////////////////////////////////////  161. Sorting Arrays   /////////////////////////////////////////////////

// Strings
const owners = ['Ahmad', 'Jonas', 'Zack', 'Adam', 'Mohammad'];
console.log(owners.sort());
console.log(owners); // Original array was mutates

// Numbers : by passing compare callback function into the sort method
console.log(movements);

// a = currentValue , b = nextValue. if we imagine the sort method looping over the array.
// return < 0, a will be sorted before b (keep order)
// return > 0, b will be sorted before a (switch order)

// Ascending
// step 1

// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

// step 2
movements.sort((a, b) => a - b);

console.log(movements);

////////

// Descending
// step 1

// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

// step 2
movements.sort((a, b) => b - a);

console.log(movements);

/////////////////////////////////////////////////  162. More Ways of Creating and Filling Arrays   /////////////////////////////////////////////////

const arr = [1, 2, 3, 4, 5, 6, 7];

// Empty arrays + fill method
const x = new Array(7);
console.log(x);

// console.log(x.map(() => 5)); it doesn't work

x.fill(1);

x.fill(1, 3);
console.log(x);

x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
// What if we want to create an array programmatically ? we use Array.from():
// Array.from(arrayLike, (element, index, array) => { ... } )
// Array.from(arrayLike, mapFn, thisArg)
// Array.from(arrayLike, function mapFn(element, index, array) { ... }, thisArg)

// notes that we're not using the from() as a method on an array, Instead we are using it on the Array() constructor.
// so again, Array() is a function and then on this function object, we call the from() method.

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', () => {
  // const movementsUI = [...document.querySelectorAll('.movements__value')];
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('???', ''))
  );
  console.log(movementsUI);
});

//// ex from MDN ////
console.log(Array.from('foo'));

const set = new Set(['foo', 'bar', 'baz', 'foo']);
console.log(Array.from(set));

const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
console.log(Array.from(map));

const mapper = new Map([
  ['1', 'a'],
  ['2', 'b'],
]);
console.log(Array.from(mapper.values()));
console.log(Array.from(mapper.keys()));

// Array from an Array-like object (arguments)
function f() {
  return Array.from(arguments);
}

console.log(f(1, 2, 3));
console.log(f('Ahmad'));

/////////////////////////////////////////////////  164. Array Methods Practice   /////////////////////////////////////////////////

// ex:1

const bankDepositsSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

const bankDepositsSum = accounts
  .flatMap(acc => acc.movements)
  .reduce((sum, cur) => sum + (cur > 0 ? cur : 0));

console.log(bankDepositsSum);

// ex:2

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0); // insted of count + 1 , we can use ++count

console.log(numDeposits1000);

// ex:3

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sums);

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

//using array

const [deposits, withdrawals] = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    [sums.deposits, sums.withdrawals]
  );
console.log(deposits, withdrawals);

const [deposits, withdrawals] = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    [sums.deposits, sums.withdrawals]
  );
console.log(deposits, withdrawals);

// ex:4
// this is a nice title => This Is a Nice Title

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  title = title.replace(/\s+/g, ' ').trim(); // removes extra spaces from within the words.
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase(' this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(
  convertTitleCase(
    'and here is another title with an EXAMPLE and it is so nice!'
  )
);

let t = '  ahmad         raed';
console.log(t.replace(/\s+/g, ' ').trim());
console.log(t.trim());

// using normal for loop

const convertTitleCase = function (title) {
  const capitalize = word => word[0].toUpperCase() + word.slice(1);
  title = title.replace(/\s+/g, ' ').trim();
  const exceptions = ['a', 'an', 'and', 'but', 'or', 'on', 'in', 'with'];
  const ConvertTitleToLowerCase = title.toLowerCase().split(' ');

  let titleUpperCase = [];
  for (const word of ConvertTitleToLowerCase)
    exceptions.includes(word)
      ? titleUpperCase.push(word)
      : titleUpperCase.push(word[0].toUpperCase() + word.slice(1));
  return capitalize(titleUpperCase.join(' '));
};
console.log(convertTitleCase(' this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(
  convertTitleCase(
    'and here is another title with an EXAMPLE and it is so nice!'
  )
);
*/

/////////////////////////////////////////////////  Coding Challenge #2   /////////////////////////////////////////////////

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  } `
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
// currentFood > (recommendedFood * 0.90) && currentFood < (recommendedFood * 1.10)
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
// sort it by recommended food portion in an ascending order [1,2,3]

const dogsSorted_1 = dogs.sort((dog_a, dog_b) => dog_a.recFood - dog_b.recFood);
console.log(dogsSorted_1);

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

console.log(dogs.slice());
console.log(dogs);
