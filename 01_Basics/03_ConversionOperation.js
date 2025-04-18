// // conversion operation in javascript
// // 1. String to Number
// let strNum = "123";
// let num = Number(strNum); // Converts string to number      default
// console.log(num); // 123
// // 2. Number to String
// let numStr = 123;
// let str = String(numStr); // Converts number to string
// console.log(str); // "123"
// // 3. String to Boolean
// let strBool = "true";
// let bool = Boolean(strBool); // Converts string to boolean
// console.log(bool); // true
// // 4. Boolean to String
// let boolStr = true;
// let strBool2 = String(boolStr); // Converts boolean to string
// console.log(strBool2); // "true"
// // 5. Number to Boolean
// let numBool = 1;
// let boolNum = Boolean(numBool); // Converts number to boolean
// console.log(boolNum); // true
// // 6. Boolean to Number
// let boolNum2 = true;
// let numBool2 = Number(boolNum2); // Converts boolean to number
// console.log(numBool2); // 1
// // 7. String to Object
// let strObj = "hello";
// let obj = new String(strObj); // Converts string to object
// console.log(obj); // [String: 'hello']
// // 8. Object to String
// let objStr = new String("hello");
// let strObj2 = objStr.toString(); // Converts object to string
// console.log(strObj2); // "hello"
// // 9. Number to Object
// let numObj = 123;
// let objNum = new Number(numObj); // Converts number to object
// console.log(objNum); // [Number: 123]
// // 10. Object to Number
// let objNum2 = new Number(123);
// let numObj2 = objNum2.valueOf(); // Converts object to number
// console.log(numObj2); // 123
// // 11. Boolean to Object
// let boolObj = true;
// let objBool = new Boolean(boolObj); // Converts boolean to object
// console.log(objBool); // [Boolean: true]
// // 12. Object to Boolean
// let objBool2 = new Boolean(true);
// let boolObj2 = objBool2.valueOf(); // Converts object to boolean
// console.log(boolObj2); // true
// // 13. Implicit Conversion
// let implicitNum = 123;
// let implicitStr = "456";
// let implicitResult = implicitNum + implicitStr; // Implicit conversion to string
// console.log(implicitResult); // "123456"
// // 14. Explicit Conversion
// let explicitNum = 123;
// let explicitStr = "456";
// let explicitResult = Number(explicitStr) + explicitNum; // Explicit conversion to number
// console.log(explicitResult); // 579
// // 15. Array to String
// let arr = [1, 2, 3];
// let arrStr = arr.toString(); // Converts array to string
// console.log(arrStr); // "1,2,3"
// // 16. String to Array
// let strArr = "1,2,3";
// let arr2 = strArr.split(","); // Converts string to array
// console.log(arr2); // [ '1', '2', '3' ]
// // 17. Object to String
// let objStr2 = { name: "John", age: 30 };
// let strObj3 = JSON.stringify(objStr2); // Converts object to string
// console.log(strObj3); // '{"name":"John","age":30}'
// // 18. String to Object
// let strObj4 = '{"name":"John","age":30}';
// let obj3 = JSON.parse(strObj4); // Converts string to object
// console.log(obj3); // { name: 'John', age: 30 }
// // 19. Date to String
// let date = new Date();
// let dateStr = date.toString(); // Converts date to string
// console.log(dateStr); // "Mon Oct 23 2023 10:00:00 GMT+0530 (India Standard Time)"
// // 20. String to Date
// let dateStr2 = "2023-10-23T10:00:00Z";
// let date2 = new Date(dateStr2); // Converts string to date
// console.log(date2); // 2023-10-23T10:00:00.000Z
// // 21. Array to Object
// let arrObj = [1, 2, 3];
// let objArr = { arr: arrObj }; // Converts array to object

// console.log(objArr); // { arr: [ 1, 2, 3 ] }
// // 22. Object to Array
// let objArr2 = { arr: [1, 2, 3] };
// let arrObj2 = objArr2.arr; // Converts object to array

// console.log(arrObj2); // [ 1, 2, 3 ]
// // 23. Function to String
// let func = function () {
//   return "Hello";
// };
// let funcStr = func.toString(); // Converts function to string
// console.log(funcStr); // "function () {\n  return 'Hello';\n}"
// // 24. String to Function
// let funcStr2 = "function () { return 'Hello'; }";
// let func2 = new Function(funcStr2); // Converts string to function
// console.log(func2()); // "Hello"
// // 25. Function to Object
// let funcObj = function () {
//   return "Hello";
// };
// let objFunc = new Object(funcObj); // Converts function to object

// console.log(objFunc); // [Function: funcObj]
// // 26. Object to Function
// let objFunc2 = { func: function () { return "Hello"; } };
// let funcObj2 = objFunc2.func; // Converts object to function
// console.log(funcObj2()); // "Hello"
// // 27. Array to Number
// let arrNum = [1, 2, 3];
// let numArr = Number(arrNum); // Converts array to number
// console.log(numArr); // NaN
// // 28. Number to Array
// let numArr2 = 123;
// let arrNum2 = Array.from(String(numArr2)); // Converts number to array
// console.log(arrNum2); // [ '1', '2', '3' ]
// // 29. Array to Boolean
// let arrBool = [1, 2, 3];
// let boolArr = Boolean(arrBool); // Converts array to boolean
// console.log(boolArr); // true   
// // 30. Boolean to Array
// let boolArr2 = true;
// let arrBool2 = [boolArr2]; // Converts boolean to array     
// console.log(arrBool2); // [ true ]
// // 31. Object to Number

// let score =5 
// let score = undefined;
// let score = "5"
// let score = "5asjc"
// let score = true;
// let score = "sachin"
// console.log(typeof(score)); // 100

// let intNumber = Number(score);
// console.log(typeof(intNumber));

// console.log(intNumber);

// "33"=>33
// "33asdc"=>NaN
// True => 1
// False => 0

// let isLoggedIn = 1; //true
// let isLoggedIn = 0; //false
// let isLoggedIn = ""; //false
// let isLoggedIn = "sachinn"; //true

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof(booleanIsLoggedIn));
// console.log(booleanIsLoggedIn);

// let someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof(stringNumber))


//######################################### Operations ##########################

// let str1 = "sachin ";
// let str2 = "kumar";
// let str3 = str1 + str2
// console.log(str3);

// console.log(2+"5"); // output : 25
// console.log("2"+5);// output : 25
// console.log("2"+5+5);// output : 225
// console.log(5+2+"2"); // output: 72
// console.log("3"+3+8); // output : 388

// console.log(+true) // 1

let num1,num2,num3;
num1 = num2 = num3 = 4;
console.log(num1,num2,num3);




