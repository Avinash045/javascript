// const user = new Object();

const user = {}

user.id = 1432
user.name = "Anushka"
user.isLoggedIn = false
console.log(user);

const otherUser = {
    email: "abcd@gmail.com",
    fullname: {
        userFullName:{
            fistName:" Anushka ",
            lastName: " Tele "
        }
    }
}

// console.log(otherUser.fullname.userFullName.lastName);

const obj1 = {1: "Avinash", 2:"Adinath", 3:"Anushka"}
const obj2 = {4: "Ganpat", 5:"Ankita", 6:"Mahii"}

const mergedObj =  Object.assign(obj1, obj2);       // can give({},obj1, obj2) also. {} is target and others will be sources. 
//console.log(mergedObj);

const mergedObj1 = {...obj1, ...obj2};            // merged using spread operator.
// console.log(mergedObj1);

const newUsers = [
    {
        name: " Avinash",
        id: 45
    },
    {
        name: " Adinath",
        id: 5
    },
    {
        name: " Anushka",
        id: 45
    }
]

console.log(newUsers[2].name);


console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('name'));