'use strict';

////////////////////////////  Values and Variables  ////////////////////////////

const country = 'Jordan';
const continent = 'asia';
let population = 1200000;

console.log('My Country is: ' + country + ' ' + ' And My continent is: ' + continent + ' and number of population is: ' + population);

////////////////////////////  Data Types  ////////////////////////////

const isIsland = false;
let language;

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

////////////////////////////   let, const and var  ////////////////////////////

language = 'arabic';

////////////////////////////   Basic Operators  ////////////////////////////

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description1);


////////////////////////////   Coding Challenge #1  ////////////////////////////

/*

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

    GOOD LUCK 😀
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.76;

const BMIJohn = massJohn / heightJohn ** 2;
const BMIMark = massMark / (heightMark * heightMark);

const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

////////////////////////////   Strings and Template Literals  ////////////////////////////

const description = `${country} is in ${continent} and it's ${population} million people speak ${language}`;
console.log(description);

////////////////////////////   Taking Decisions: if / else Statements  ////////////////////////////


if (population > 3300000) {
    console.log(`${country} is above average.`);
} else {
    console.log(`${country} is ${population} million`);
}

////////////////////////////   Coding Challenge #2  ////////////////////////////

if (BMIJohn > BMIMark) {
    console.log(`John's BMI ${BMIJohn} is higher than Marks's ${BMIMark}.`);
} else {
    console.log(`Marks's BMI ${BMIMark} is higher than John's ${BMIJohn}.`);
}


////////////////////////////   Type Conversion and Coercion  ////////////////////////////

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

////////////////////////////   Equality Operators: == vs. ===  ////////////////////////////
/*
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
console.log(typeof numNeighbours);
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border!');
} else {
    console.log('No border');
}
*/

////////////////////////////   Logical Operators  ////////////////////////////

if (language === 'english' && population < 5000000 && isIsland === false) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

////////////////////////////   Coding Challenge #3  ////////////////////////////

// const avgScoreDolphins = (96 + 108 + 89) / 3;
// const avgScoreKoalas = (88 + 91 + 110) / 3;

// if (avgScoreDolphins > avgScoreKoalas) {
//     console.log(`The Winner is Dolphins Team 🏆!`);
// } else if (avgScoreKoalas > avgScoreDolphins) {
//     console.log(`The Winner is Koalas Team! 🏆`);
// } else if (avgScoreKoalas === avgScoreDolphins) {
//     console.log(`Both win the trophy!`);
// } else {
//     console.log(`no one wins the trophy 😭`);
// }

// const avgScoreDolphins = (97 + 112 + 101) / 3;
// const avgScoreKoalas = (109 + 95 + 123) / 3;

// if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
//     console.log(`The Winner is Dolphins Team 🏆!`);
// } else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
//     console.log(`The Winner is Koalas Team! 🏆`);
// } else if (avgScoreKoalas === avgScoreDolphins && avgScoreKoalas >= 100 && avgScoreDolphins >= 100) {
//     console.log(`Both win the trophy!`);
// } else {
//     console.log(`no one wins the trophy 😭`);
// }

const avgScoreDolphins = (97 + 112 + 101) / 3;
const avgScoreKoalas = (109 + 95 + 106) / 3;

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
    console.log(`The Winner is Dolphins Team 🏆!`);
} else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
    console.log(`The Winner is Koalas Team! 🏆`);
} else if (avgScoreKoalas === avgScoreDolphins && avgScoreKoalas >= 100 && avgScoreDolphins >= 100) {
    console.log(`Both win the trophy!`);
} else {
    console.log(`no one wins the trophy 😭`);
}

////////////////////////////   The switch Statement  ////////////////////////////

const languages = 'arabic';

switch (languages) {
    case 'chinese or mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('5th most spoken language');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default: {
        console.log('Great language too 😚');
    }
}

////////////////////////////   The Conditional (Ternary) Operator  ////////////////////////////

console.log(`${country}'s population is ${population > 3300000 ? 'above' : 'below'} average`);

////////////////////////////   Coding Challenge #4  ////////////////////////////

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);