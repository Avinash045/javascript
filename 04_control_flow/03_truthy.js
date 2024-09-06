
// const userEmail = "avinash@gmail.com"
// if (userEmail) {
//     console.log("User have email.");
// } else {
//     console.log("User do not have email.")
// }

const userEmail = ""                          // empty string is a falsy value.
if (userEmail) {
    console.log("User have email.");
} else {
    console.log("User do not have email.")
}

// falsy values :         false, 0, -0, BigInt on, "", null, undefined, NaN.
// truthy values:         "0", 'false', " ", [], {}, function(){}

const myArray = []
if(myArray.length === 0){
    console.log("Array is empty");
}

const myObject ={}

if(Object.keys(myObject).length === 0){
    console.log("Object is empty");
}


//     false == 0,  false == "",  0 == ""            these all are true.  

// Nullish Coalescing operator (??): null undefined.

// let val = 5 ?? 10
// let val1 = null ?? 10
// console.log(val1);

// let val2 = undefined ?? 15 
// console.log(val2);

let val3 = null ?? 10 ?? 25
console.log(val3);



// *********************************   Trniary Operator (?) ********************************************

const prodPrice = 150
prodPrice <= 100 ? console.log("Price is less than 100.") : console.log("Price is more than 100.")