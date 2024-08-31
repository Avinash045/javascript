const myDate = new Date
// console.log(myDate);
// console.log(myDate.toString());           // return current day, month name, year and GMT time.
// console.log(myDate.toISOString());        // return almost same as myDate.
// console.log(myDate.toLocaleDateString()); // returns only date as mm/dd/yy.
// console.log(myDate.toLocaleString());     // return date as mm/dd/yy with GMT time.
// console.log(myDate.toTimeString());       // return only time as GMT.


let myCreatedDate = new Date("2024-08-31");   // return given date with day.
//console.log(myCreatedDate.toDateString());


// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
