const number = 264
//console.log(number);

const otherNumber = new Number(209)
//console.log(otherNumber);

const anotherNumber = 100000000
// console.log(anotherNumber.toLocaleString());        // by default it will represent a number in US standard.
// console.log(anotherNumber.toLocaleString('en-IN')); // represent a number in indian measurement.
// console.log(anotherNumber.toFixed(2));              // gives two numbers after a decimal.
// console.log(anotherNumber.toString().length);

const balance = 213.2431
// console.log(balance.toPrecision(4));

// ********************************* Maths ************************************************************************************

// console.log(Math);
// console.log(Math.abs(-7));               // abolute converts only negative number into positive.
// console.log(Math.round(9.7));            // it will make number round off.
// console.log(Math.ceil(4.3));
// console.log(Math.floor(7.6));
// console.log(Math.min(9,3,5,8,20));
// console.log(Math.max(9,3,5,8,20));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const  min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // most important
