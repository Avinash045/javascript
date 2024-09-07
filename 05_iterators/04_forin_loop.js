// for in loop mainly use for the object but it can work on some other things too.

let nickName = {
    Avii: "Avinash",
    Adi: "Adinath",
    Anu: "Anushka",
    vicky: "Vikas",
    chiuu: "Ankita"
}
for (const key in nickName) {
//    console.log(key);                                                   // it will provide directly keys to you. 
    // console.log(`${key} is the nickname of ${nickName[key]}`);         // {objectName[key]} is for the printing values.
}                                                                    

let languages = ["py","js","css","rb"]
for (const key in languages) {
    // console.log(key);                                                // it will return only keys(index numbers) of the array.
    // console.log(`${key} is the array index of ${languages[key]}`)    // will return both key and values.
}


const map = new Map();
map.set('IN',"INDIA");
map.set('NZ', "New Zealand");
map.set('SL',"Srilanka");
map.set('UAE', "United Arab Emirites");
map.set('IN',"INDIA");

for (const key in map) {
    // console.log(key);            // it doesn't give any output because it is not iterable in 'forin' loop.
}