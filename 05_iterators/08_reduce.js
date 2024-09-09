const array1 = [1,2,3,4];

// const add = array1.reduce( function(acc, currvalue){
//     console.log(`Accumulator: ${acc} and Currentvalue: ${currvalue}`)    // print all additions and values.
//     return acc + currvalue;                 // return the last addition.
// }, 0);                                      //  given '0' is the intitial value.
// console.log(add);

const MyTotal = array1.reduce( (acc,curVal) => acc + curVal, 0);         // using arrow function.
console.log(MyTotal);

const shoppingCart = [
    {
        prodName : "Refrigerator",
        price : 15999
    },
    {
        prodName : "Cooler",
        price : 4799
    },
    {
        prodName : "Mixer",
        price : 2499
    },
    {
        prodName : "Headphones",
        price : 897
    }
]

let totalBill = shoppingCart.reduce(function(acc, item){
    return acc + item.price;                                   // calculate bill using normal function
}, 0);
console.log("Your Bill :",totalBill);

let totalPay = shoppingCart.reduce((acc,item) => acc + item.price, 0);     // using arrow functio 
console.log("Your Bill :",totalPay);