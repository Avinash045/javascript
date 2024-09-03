const user = {
    name : "Avinash",
    age : 22,
    welcomeMessage: function(){
        console.log(`${this.name}, Welcome to the website.`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.name = "Virbhadra"
// user.age = 20
// user.welcomeMessage()
console.log(this);

// function myFunction(){
//     let username = "Avinash"
//     console.log(this.username)
// }
// myFunction()

// const myFunction = function(){
//     let username = "Avinash"
//     console.log(this.username)
// }

// const myFunction = () => {
//     let username = "Avinash"
//     console.log(this.username)
// }
// myFunction()



// const add = function(num1,num2){
//     return num1 + num2;
// }

const add = (num1, num2) => num1 + num2
console.log(add(3,6));

const name = () => ({username: "Avinash"})
console.log(name());
