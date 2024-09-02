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
console.log(c);   // it will give value of local variable at global space. So don't use var.
