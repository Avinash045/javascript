const language = ['python','java','javascript','php'];

// let myLang = language.forEach( (item) => {
//     // console.log(item);                       // console will print all items but forEach dont return any value
//     return item
// });
// console.log(myLang);


let numbers = [1,2,3,4,5,6,7,8,9,10];
let printNumbers = numbers.filter( (num) => num > 4);  // filter method also uses callback function. it asks for the condition after => .
// console.log(printNumbers);

let nums = []
numbers.forEach( (num) => {
    if (num > 4) {
        nums.push(num);
    }
});
// console.log(nums);




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let likedBooks = books.filter( (bk) => bk.genre === 'Fiction');
//   console.log(likedBooks);                                         // return a book whose genre is fiction.

  likedBooks = books.filter( (bk) => bk.publish >= 1990 && bk.genre === 'Science');
//   console.log(likedBooks);                                        // checks both conditions are true or not, if true then give output.

  let myBooks = books.filter( (bk) => {
    return bk.publish > 2000 && bk.edition > 2000
  });
//   console.log(myBooks);                                 // return books published after year 2000. 


