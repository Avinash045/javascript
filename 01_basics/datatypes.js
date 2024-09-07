"use strict";  // treat all js code as newer version.

// alert(3 + 3)  // we are using node js not browser.

console.log(3 + 3);  //  code readability should be high
console.log("Avinash");

let name = "Avinash";     // string => ""
let age = 22;             // number => 2 to power 
let isLoggedIn = false;   // boolean => true or false.
let state = null;         // null => standalone value.
let country;              // undefined =>
                          // symbol => unique

console.table([name, age, isLoggedIn, state, country]);

// console.log(typeof name)   // it will show the datattype of variable.
// console.log(typeof null);  // it will give object.
// console.log(typeof undefined);   // datattype of ndefined is always undefined.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Primitive datatypes
/* 7 types
  
string, Number, boolean, null, undefined, symbol, bigInt.

*/

const score = 100;
const scoreValue = 100.3;
// console.log(typeof scoreValue);

const isLogin = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('143')
const anotherId = Symbol('143')
// console.log(id === anotherId);

const bigNumber = 432789204892n;


// Reference or Non-Primitive

/* 
    Array, Objects and Functions.
*/

const heros = ["Hanuman", "Shaktiman", "Krish"]
let myObj = {
    name : "Avinash",
    age : 22,
}

const myFunctions = function(){
    console.log("Hello world");
}

console.log(typeof myFunctions); 
console.log(typeof myObj);
console.log(typeof heros);

/* Primitive

   String => object
   Number => number
   boolean => boolean
   null => object
   undefined => undefined
   symbol => symbol
   bigInt => bigint

   Non-Primitive

   Arrays => array
   objects => object
   Functions => function / function Object.
*/