// const name = "sachin kumoar ";
// const age = 39;

// console.log(name + age + " This is your name and age.") // This is not reccomended
// console.log(`Hello everyone This is you name : ${name} and age : ${age}`) // this is recomended to use it.

const  gameName = new String('sachin-game')
// console.log(gameName[0]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf("g"));


const newString = gameName.substring(0,5);// it can't take negative value;
console.log(newString);

const anotherString = gameName.slice(-11,3);// it can take negative value
console.log(anotherString);

const newStringOne = "   sachin   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const block = "Hi everyone my name is sachin kumar ";
console.log(block.replace("sachin","ankit"));
console.log(block.includes("everyone"))
console.log(block.includes("siea"))

console.log(gameName.split("-"))
