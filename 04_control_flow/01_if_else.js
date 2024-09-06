//if

if(10 > 5){
    // console.log("Executed");
}

if(10 < 2){
    console.log("wrong condition");   // here condition is false so it will not go to console.
}

if(10 === "10"){                // === is a strictly check. It will check datatype also.
    // console.log("Executed");
}

//  >, <, >=, <=, ==, !=, ===, !==


// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);               it will give scope issue


const balance = 1500
// if(balance > 700) console.log("done"), console.log("once again");       you cane execute this code but do not write this type of code in working.

// if-else

// const age = 21
// if(age <= 21){
//     console.log("You are eligible for the marriage.");
// } else{
// console.log("Not eligible for marriage.");
// }

// if(balance < 500){
//     console.log("Less than 500");
// }else if(balance < 700){
//     console.log("balance is less than 700");
// }else if(balance < 1200){
//     console.log("Balance is less than 1200");   
// }else {
//     console.log("balance is greater than 1500");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){                
    console.log("Allow to buy course.")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in.");
}