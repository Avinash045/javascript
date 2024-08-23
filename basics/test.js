console.log("Avinash");
const accountId = 12345
let accountEmail = "avinash@gmail.com"
var accountPassword = "431511"
accountCity = "Deulgaon"   // dont use this type of declaration. use always 'let' instead of 'var' due to  issue in block scope
//                            and functional scope.
let accountState;         // it will give output as undefined.
// accountId = 2 // Not allowed to change contstant varaiable.

accountEmail = "harihar@hotmail.com"
accountPassword = 431402
accountCity = "Mahagaon"

console.log(accountId);
console.log(accountPassword);
console.log(accountEmail);

// or you can use following instead of seperate console.

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);



