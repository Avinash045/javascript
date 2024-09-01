// singleton :- When you create an object by using a constructor , it will create a singleton object.
// object.create   or  const user = new Object() :- singleton 
// const user = {}     :- non-singleton.

// Object Literals

const mySymbol = Symbol("key");         // defining symbol.

const newUser = {
    name: "Avinash",
    lastname: "Bhalerao",
    age: 22,
    gender: "Male",
    email: "avibhalerao02@gmail.com",
    "gaon": "Mahagaon",
    isLoggedIn: false,
    [mySymbol]: "Avyaaa"
}

// console.log(newUser);

// console.log(newUser.name);         // try to use lesser this type of access.
// console.log(newUser["lastname"]);  // use [] for access the object.
// console.log(newUser[mySymbol]);    // accessing symbol.
// console.log(newUser["gaon"]);      // when you use " " for define key, you must use [] for access value of that key. 
// console.log(typeof newUser[mySymbol]);

newUser.age = 21;

newUser.greeting = function(){
    console.log("Hey  guys, Attention Please...!");
}

newUser.anotherGreeting = function(){
    console.log(`Hello everyone, my Name is ${this.name}`);
}

console.log(newUser.greeting());
console.log(newUser.anotherGreeting());

