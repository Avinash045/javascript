function myFunction(){
    console.log("Avinash");
    console.log("Avishkar");
    console.log("Adinath");
    console.log("Anushka");
}
// myFunction()


// function addition(num1,num2){
//     console.log(num1 + num2);
// }
// addition(7,8)           // perform addition 
// addition(3,"7")         // it will concat numbers because of string value.

function addition(num1,num2){
        // let result = num1 + num2;
        // return result
        return num1 + num2;
        console.log("Avinash");    // it will never print because it came after decalring return.
    }

const result = addition(3, 4)
// console.log("result:",result);


function newUser(username){
    return `${username} is the new employee`;
}
// console.log(newUser())              // it will give "undefined is the new employee".
// console.log(newUser("Avinash")); 

function anotherUser(username = "India"){
    if(!username){
        console.log("Please enter username first.")
        return
    }
    return `${username} is the winner of World Cup 2024.`
}
console.log(anotherUser());

/* 
function anotherUser(username){
    if(username === India){
        return `${username} is the winner of World Cup 2024.`
    }                                                                  // error code
    return `enter your country name first.`
}

console.log(anotherUser("India"));
*/