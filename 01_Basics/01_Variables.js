// variables
// variables are containers for storing data values
// let, const, var
// let is block scoped
let x = 5; // block scoped
const y = 10; // block scoped
var z = 15; // function scoped

// let and const are preferred over var
// const is used for constants
// var is function scoped
// let and const are block scoped   

const accountId = 1234567890; // constant
const accountName = "John Doe"; // constant
const accountBalance = 1000; // constant

let accoutEmail = "sachin@gamil.com"
// let is used for variables that can be changed



// accoutId = 38420
// confirm.log(accountId) // 1234567890

// accountName = "sachin kumar"
// console.log(accountName) // sachin 

accoutEmail = "sachinkumar@gmail.com"
console.log(accoutEmail) // sachin kumar

let accountCity= "Delhi"
accountCity= "Mumbai"

accountState = "Maharashtra"


console.table([accountId,accountName,accountBalance,accoutEmail,accountCity,accountState])

/*
Please never use var because it is function scoped and can cause issues in the code
// let is block scoped and can be used in loops and functions
*/