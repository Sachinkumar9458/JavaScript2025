//Array
const arr = [0,1,2,3,4,5,6,7,8,9,10];
// const Heros = ['Ironman', 'Thor', 'Hulk', 'Captain America', 'Black Widow'];

// const arr2 = new Array(1,2,3,4,5,6,7,8,9,10);
// console.log(arr);
// console.log(Heros);
// console.log(Heros[3]);

// Arrays methods

// arr.push (11); // Add to the end
// arr.push (12); // Add to the end
// console.log(arr);
// arr.push(25); // Add to the end
// console.log(arr);
// arr.pop(); // Remove from the end
// console.log(arr);

// arr.unshift(0); // Add to the beginning
// console.log(arr);
// arr.unshift(9); // Add to the beginning
// console.log(arr);
// arr.shift(); // Remove from the beginning
// console.log(arr);
// arr.shift(); // Remove from the beginning
// console.log(arr);

// console.log(arr.includes(3)); // Check if 3 is in the array
// console.log(arr.indexOf(4)); // Check if 4 is in the array
// console.log(arr.includes(100)); // Check if 100 is in the array
// console.log(arr.indexOf(100)); // Check if 100 is in the array

// const newArr = arr.join();
// console.log(arr);
// console.log(newArr); // Join the array into a string
// console.log(typeof(newArr));
// console.log(typeof(arr)); // Check the type of the array

// slice and splice
// what is the difference between slice and splice?
// slice - returns a new array, does not change the original array
// splice - changes the original array, returns the removed elements

//slice
// const sliceArr = arr.slice(2, 5); // Slice the array from index 2 to 5
// console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // Original array is not changed
// console.log(arr.slice(2, 5)); // [3, 4, 5] // Slice the array from index 2 to 5
// console.log(arr);


console.log(arr);
console.log(arr.slice(1, 3)); // [3, 4, 5] // Slice the array from index 2 to 5
console.log(arr);
const spliceArr = arr.splice(1,3); // Splice the array from index 2 to 5
console.log(spliceArr); // [1,2,3] Splice the array from index 2 to 5
console.log(arr); // [1, 2, 6, 7, 8, 9, 10] // Original array is changed
