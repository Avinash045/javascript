//*********************************** */ global scope andblock scope **********************************

let a = 5
const b = 8        // these are the global variables
var c = 3

// function numbers(){
//     let a = 10              // these are the local variables.
//     const b = 20
//     var c = 30             
    // console.log("Inner:",a);  
    // console.log("Inner:",b);
    // console.log("Inner:",c);
// }

// numbers()
// console.log(a);  
// console.log(b);   
// console.log(c);

if(true){
    let a = 10
    const b = 20  
    var c = 30
}
// console.log(c);   // it will give value of local variable at global space. So don't use var.

// ************************************************************************************************

function hari(){
    const name = "Harihar Bhalerao"
    function avii(){
         const myName = "Avinash Bhalerao"
//         console.log(name);                           // can be accessible. global variable can access at local space. 
//         console.log(myName);
     }
    avii()
//     // console.log(myName);                   // cannot access local varibale at global space due its scope.
//     console.log(name);
 }
 hari()


if(true){
    const username = "Avinash"
    if(username === "Avinash"){
        const website = "Instagram"
        console.log(username + website);                 
    }
    // console.log(website);                   here also we cannot access the local variable at global space due to its scope. 
    console.log(username);
}

// ********************************* mini hoisting **************************


// console.log(addition(7));                 we can call a normal function before its declarartion.
function addition(num){
    return num + 2;
}
console.log(addition(5));



// console.log(anotherAdd(8));                but we could not call a function stored in a varibale. 
const anotherAdd = function(num){
    return num + 7;
}
console.log(anotherAdd(8));