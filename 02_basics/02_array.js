// const cartoons = new Array("Motu", "Patlu", "Oggy", "Bheem");
// console.log(cartoons);
//const heros = new Array("Shaktimaan", "Hanuman", "Krish");
// console.log(heros);

// cartoons.push(heros);   // it will add whole array of 'heros' as a single element of array.
// console.log(cartoons);     
// console.log(cartoons[4][1]);

//const combo_Heros = cartoons.concat(heros);   // it will merge or concat both arrays to form a single array.
//console.log(combo_Heros);
                            //  OR    //

// const all_Heros = [...cartoons, ...heros];    //  works same as concat method.  Called as spread operator.
// console.log(all_Heros);

// const arr = [1,2,3,[9,4,7,[13,0,3,[7,24,14],28],11]];
// const newArr = arr.flat(4);                         // makes single array of multiple arrays. have to define value.
// console.log(newArr);


// console.log(Array.isArray("Avinash"));         // states that element is present in the array or not.
// console.log(Array.from("Avinash"));            // converts string into array.
// console.log(Array.from({name: "Avinash"}));    // gives empty array.

// let rohit = 264;
// let rohit1 = 213;
// let rohit2 = 209;

// console.log(Array.of(rohit,rohit1,rohit2));    // return an array.





// ********** Practice **********************

const arr = ["Avinash","Vikas","Yuvraj"," Sandeep"]
const arr1 = [1,2,3,4,5]
// arr.push(arr1);
// console.log(arr);

const newArr = arr.concat(arr1);
console.log(newArr);
const newArr1 = [...arr, ...arr1]
console.log(newArr1);

console.log(Array.isArray("Yuvraj"));
console.log(newArr1.includes("Avinash"));

const arr2 = [2,3,4,[11,23,17,],[15,19,27,[7,9,2,]]]
const arr3 = arr2.flat(1);
console.log(arr3);

console.log(Array.from("Bhalerao"));

let score = 264
let score1 = 209
let score2 = 207
console.log(Array.of(score, score1,score2));



