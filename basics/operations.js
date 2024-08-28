let value = 3
let negValue = -value
console.log(negValue)

// basic operations 
// console.log(3+3);
// console.log(3*3);
// console.log(3/3);
// console.log(3-3);
// console.log(10%3);

let str1 = "Avinash"
let str2 = " Bhalerao"
let str3 = str1 + str2
console.log(str3);

console.log("3" + 3);          // it gives 33
console.log("3" + 3 + 3);      // it gives 333
console.log(1 + "3");          // it gives 13
console.log(1 + 3 + "3");      // it will return 43 : firstly it add 1 and 3 and concat 4 and 3.

console.log(3 + 4 + 5 % 3)     // don't write  code like this.write it in parenthesis like console.log((3+4) + 5 % 3)

let gameCounter = 100
++gameCounter;
console.log(gameCounter);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Comparisions operators

console.log(2==2);
console.log(2>=1);
console.log(2<=1);
console.log(2>1);
console.log(2<1);
console.log(2!=1);  // these all are the simple comparison operators. 

// try to avoid following comparisions conversions.
console.log("2" + 1);  
console.log("02" + 1);  

console.log(null == 0);
console.log(null > 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// === 

console.log("02" === 2);  // it will strictly check thr datatype of both. if found same datatypes it will perform conversion  otherwise not.


