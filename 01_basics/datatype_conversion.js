let score = "33";
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

/* "33" => 33
   "33abc" => it will convert but should not be convertable. 
   true => it will give 1 and for false => 0
   "Avinash" => NaN
   null => 0
   undefined => NaN
*/

let isLoggedIn = true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// "avinash" => true;       
//  "" => false
