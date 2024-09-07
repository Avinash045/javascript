// this loop is mainly used to work on the array.

let score = [1,2,3,4,5,]
for (const num of score) {                 // here the object in condition is "things on which we perform task".
    // console.log(`Score is ${num}`) 
}

let greetings = "Hello World"
for (const greet of greetings) {
    console.log(`character greetings are ${greet}`)
}

// **************** Map ************

const map = new Map();              // map remembers the sequence of the given elements and it does not allows any duplicate. 
map.set('IN', "INDIA")
map.set('NZ', "New Zealand")
map.set('SL',"Srilanka")
map.set('UAE', "United Arab Emirites")
map.set('IN',"INDIA")
console.log(map);
for (const [key, Value] of map) {           // only 'key' will return you elements in spreaded arrays. 
    console.log(key, ':' , Value);          // but [key, value] will return you destructured array.
}


let countryName = {
    'IN': "India",
    'USA': "United States Of America",
    'NZ': "New Zealand",
    'SL': "Srilanka"
}

// for (const key of countryName) {               // objects are not iterable in forof loop.
    // console.log(key);
// }