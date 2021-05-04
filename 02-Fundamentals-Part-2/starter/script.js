'use strict';

////////////////////////////  Functions  ////////////////////////////

function describeCountry(country, population, capitalCity) {
  const data = `${country} has ${population} million people and capital city is ${capitalCity}.`;
  return data;
}

// const jordan = describeCountry('Jordan', 12, 'Amman');
// const usa = describeCountry('USA', 300, 'Washington');
// const palestine = describeCountry('Palestine', 12, 'Jerusalem');
// console.log(jordan, usa, palestine);

////////////////////////////  Function Declarations vs. Expressions  ////////////////////////////

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const decChina = percentageOfWorld1(1441);
const decJordan = percentageOfWorld1(12);
const decUSA = percentageOfWorld1(300);
console.log(decChina, decJordan, decUSA);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const china = percentageOfWorld2(1441);
const jordan = percentageOfWorld2(12);
const usa = percentageOfWorld2(300);
console.log(china, jordan, usa);

////////////////////////////  Arrow Functions  ////////////////////////////

const percentageOfWorld3 = population => (population / 7900) * 100;

const arrowPopulation = percentageOfWorld3(12);
console.log(arrowPopulation);

////////////////////////////  Functions Calling Other Functions  ////////////////////////////

// function describePopulation(country, population){
//   return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;
// }

const descriptionPopulation = function (country, population) {
  const description = `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world.`;
  return description;
};

console.log(descriptionPopulation('china', 1441));
console.log(descriptionPopulation('Jordan', 12));
console.log(descriptionPopulation('USA', 350));

////////////////////////////  Coding Challenge #1  ////////////////////////////

const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgScoreDolphins = calcAvg(44, 23, 71);
const avgScoreKoalas = calcAvg(65, 54, 49);

const avgScoreDolphins_1 = calcAvg(85, 54, 41);
const avgScoreKoalas_1 = calcAvg(23, 34, 27);

const checkWinner = (avgDolhins, avgKoalas) => {
  if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
  } else if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`);
  } else {
    console.log('No team wins...');
  }
};

checkWinner(avgScoreDolphins, avgScoreKoalas);
checkWinner(avgScoreDolphins_1, avgScoreKoalas_1);

////////////////////////////  Introduction to Arrays  ////////////////////////////

const populations = [12, 123, 130, 150];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

////////////////////////////  Basic Array Operations (Methods)  ////////////////////////////

/*
const neighbours = ['palestine', 'Sirya', 'lebanon'];
neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if(!neighbours.includes('Germany')){
  console.log('Probably not a central European country :D');
}

// let lebanon = neighbours.indexOf('lebenon');
// lebanon = 'lebanon Kingdom';
// neighbours.push(lebanon);

neighbours[neighbours.indexOf('lebanon')] = 'lebanon Kingdom';
console.log(neighbours);
*/

////////////////////////////  Coding Challenge #2  ////////////////////////////

const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

////////////////////////////  Introduction to Objects  ////////////////////////////

const myCountry = {
  country: 'Jordan',
  capital: 'Amman',
  language: 'arabic',
  population: 12,
  neighbours: ['palestine', 'Sirya', 'lebanon'],
};

////////////////////////////  Dot vs. Bracket Notation  ////////////////////////////

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);

////////////////////////////  Object Methods  ////////////////////////////

//Challenge

const ahmad = {
  firstName: 'ahmad',
  lastName: 'aldabouqi',
  job: 'programmer',
  birthYear: 1997,
  hasDriverLicense: true,

  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-yeas old ${
      this.job
    }, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's License.`;
  },
};

console.log(ahmad.getSummary());

const myCountry2 = {
  country: 'Jordan',
  capital: 'Amman',
  language: 'arabic',
  population: 12,
  neighbours: ['palestine', 'Sirya', 'lebanon'],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },

  checkIsland: function () {
    // this.isIsland;
    // if(this.neighbours){
    //   return this.isIsland = false;
    // }else{
    //   return this.isIsland = true;
    // }

    // this.isIsland = this.neighbours.length === 0 ? true : false;

    this.isIsland = !Boolean(this.neighbours.length);
  },
};

myCountry2.describe();
myCountry2.checkIsland();
console.log(myCountry2);

////////////////////////////  Coding Challenge #3  ////////////////////////////

const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
  console.log(
    `${john.firstName}'s ${john.lastName} BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})!`
  );
} else {
  console.log(
    `${mark.firstName}'s ${mark.lastName} BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})!`
  );
}

////////////////////////////  Iteration: The for Loop  ////////////////////////////

for (let voter = 1; voter <= 50; voter++) {
  // console.log(`Voter Number ${voter} is currently voting.`);
}

////////////////////////////  Looping Arrays, Breaking and Continuing  ////////////////////////////

// const population2 = [12, 123, 130, 150];
// const percentages2 = [];

// for(let i = 0; i < population2.length; i++){
//   percentages2.push(percentageOfWorld1(population2[i]));
// }
// console.log(percentages2);

////////////////////////////  Looping Backwards and Loops in Loops  ////////////////////////////

const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

////////////////////////////  The while Loop  ////////////////////////////
const population2 = [12, 123, 130, 150];
const percentages2 = [];
let i = 0;
while (i < population2.length) {
  percentages2.push(percentageOfWorld1(population2[i]));
  i++;
}
console.log(percentages2);

////////////////////////////  Coding Challenge #4  ////////////////////////////

const billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipss = [];
const totalss = [];

for (let i = 0; i < billss.length; i++) {
  const tip = calcTip(billss[i]);
  tipss.push(tip);
  totalss.push(tip + billss[i]);
}
console.log(tipss, totalss);

const calcAvgg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAvgg([1, 2, 3]));
console.log(calcAvgg(totalss));
console.log(calcAvgg(tipss));
console.log(calcAvgg(tipss));
console.log(calcAvgg(tipss));

// FIXME
