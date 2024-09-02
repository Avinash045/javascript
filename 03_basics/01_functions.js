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
// console.log(anotherUser());


function calCartPrice(num1){
    return num1
}
 console.log(calCartPrice(50));  // u can give directly object too.

 function multiPrice(...num){
    return num
 }

 console.log(multiPrice(299,199,349));

 const user = {
    prodName: "IceCream",
    price: 299
 }

function handleObject(anyObject){
    return `product is ${anyObject.prodName} and its price is ${anyObject.price}.`
}
//console.log(handleObject(user));
console.log(handleObject({
    prodName: "IceCream",
    price: 299
 }))

const arr = [100,200,300,400]
function arrFunction(getArr){
    return getArr[2]
}
console.log(arrFunction(arr));