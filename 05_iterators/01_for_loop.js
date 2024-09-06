// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}


for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 7){
        // console.log(`7 is the Thala's number.`);
        
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop Value: ${i}`);
    for (let j = 1; j < 10; j++) {
        // console.log(`Inner Loop: ${j} and inner loop ${i}`);
        // console.log(i + "*" + j + " = " + i*j);
    }
}

let myArray = ["Avinash","Adinath","Ganpat","Anushka","Komal"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(`We are MGM Students: ${element}`);
}

// ********************* break and Continue ************************************
for (let i = 1; i <= 15; i++) {
    if(i == 7){
        // console.log(`MS Dhoni's Jersy Number is 7`);
        break                                             // it will stop after executing if condition.
    }
    // console.log(`Value of i is ${i}`);
}


for (let i = 1; i <= 15; i++) {
    if(i == 7){
        console.log(`MS Dhoni's Jersy Number is 7`);
        continue                                          // it will continue to execute next code after executing if condition.
    }
    console.log(`Value of i is ${i}`);
}