const name = "Avinash"
const lastName = "Bhalerao"
console.log(`Hello, My name is ${name} and my surname is ${lastName}.`)  // Modern Concatenation.

const myName = "Avinash-Harihar-Bhalerao"
console.log(myName[0])
console.log(myName.__proto__)  // it will return as a object.

console.log(myName.indexOf('-'));  // It will return the inedx of first occurance in the name.
console.log(myName.charAt(16));    // It will return the character on the index number 16.

console.log(myName.length);        // provide the length of the name in variable myName.
console.log(myName.includes('Harihar'));  // if name includes 'Harihar" then it will return true otherwise false.
console.log(myName.toUpperCase());    // it will convert whole string into uppercase.
console.log(myName.split('-'));       // it will convert string object into array by spliting concept.

const stringOne = "Virbhadra"
const anotherSrting = stringOne.substring(0, 6)  // returns the substring according to index from original string.
console.log(anotherSrting);

const newString = stringOne.slice(-8, 4)
console.log(newString);  // returns the string from the ending accornding to -8.

const mySurname = "   Bhalerao   "
console.log(mySurname);
console.log(mySurname.trim());      // it will remove the space from the both end.
console.log(mySurname.trimStart());   // it will remove the space from the start of the string & same "trimEnd" remove space at end. 

const url = "https://avinash.com/avinash%20bhalerao"
console.log(url.replace('%20','-'));


/*  Some of the methods or functions of javascript are given below.

1. toUpperCase => convert whole string into uppercase.
2. toLowerCase => convert whole string into lowercase.
3. replace => replaces specific character with given char.
4. indexOf => gives index of given character.
5. charAt => gives character on given index number.
6. trim => will removes spaces from the both ends.
7. trimEnd => removes empty spaces from the end of the string.
8. trimStart => removes empty spacces from the start of the string.
9. slice => return a substring and accepts the negative value also.
10. substring => return a substring but wont accepts negative value.
11. split => it will split the whole string into array.
12. includes => return true if provided string is present in original string otherwise return false.

*/