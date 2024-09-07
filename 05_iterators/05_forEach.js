const programming = ["js","python","css","HTML",]

// programming.forEach( function(value) {            // using normal function. in forEach loop function does not have any name.
//     console.log(value);
// } )

// programming.forEach( (item) => {                  // forEach loop using arrow function.
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// programming.forEach( printMe );                     // printing languange names by reference of printMe.

// programming.forEach((index, item, arr) =>{             // it will print all item, index and whole array.
//     console.log(index, item, arr);
// })


const myFriends = [
    {
        name : "Adinath",
        Surname : "Mohite"
    },
    {
        name : "Sandeep",
        Surname : "Bajbalkar"
    },
    {
        name : "Vikas",
        Surname : "Gawande"
    },
    {
        name : "Ganpat",
        Surname : "Turate"
    },
    {
        name : "Avdhut",
        Surname : "Asore"
    }
]

myFriends.forEach( (item) => {
    console.log(item.Surname);            // how to fetch the values form objects inside array.
})
