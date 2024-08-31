// const myArr = [0,1,2,Avinash, Adinath, Vikas]
// console.log(myArr);

const myArr = new Array(0,1,2,3,4,5);   // you can define array like this.
// console.log(myArr);

// ************************* methods of Array ****************************************************

// myArr.push(7);              // By default add element at the end of the array.
// myArr.push(9);              
// console.log(myArr); 

// myArr.pop();                // by default remove last element from the array.
// console.log(myArr);

// myArr.unshift(8);           // add element by default at the start of the array.
// console.log(myArr);

// myArr.shift();              // By default removes an element from the start of the array.
// console.log(myArr);

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(4));


// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);   // string 


// ********* slice and splice methods **************

console.log("A", myArr);         // original array

const arr1 = myArr.slice(1,3);   // sliced array. it gives the slice of array without breaking original array.
console.log(myArr);
console.log(arr1);

const arr2 = myArr.splice(1,3);  // it will return spliced array. This method makes changes into original array.
console.log(myArr);
console.log(arr2);
