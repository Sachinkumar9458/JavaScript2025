// Date
let myDate = new Date();
/*console.log(myDate); // Current date and time
console.log(myDate.getDate);
console.log(myDate.getDay()); // Day of the week (0-6)
console.log(myDate.getFullYear()); // Year
console.log(myDate.getHours()); // Hour (0-23)
console.log(myDate.getMilliseconds()); // Milliseconds
console.log(myDate.getMinutes()); // Minutes
console.log(myDate.getMonth()); // Month (0-11)
console.log(myDate.getSeconds()); // Seconds
console.log(myDate.getTime()); // Timestamp (milliseconds since Jan 1, 1970)
console.log(myDate.getTimezoneOffset()); // Timezone offset in minutes*/


/*console.log(myDate.toString()); // String representation of the date
console.log(myDate.toDateString()); // Date in a human-readable format
console.log(myDate.toISOString()); // ISO 8601 format
console.log(myDate.toLocaleDateString()); // Locale-specific date format
console.log(myDate.toLocaleString()); // Locale-specific date and time format

console.log(myDate.toLocaleTimeString()); // Locale-specific time format*/

// console.log(typeof(myDate)); // Type of the date object

let myAnotherDate = new Date("2024-12-09 ")

console.log(myAnotherDate.toLocaleDateString()); // Date object created from a string

let myTimeStamp = Date.now(); // Current timestamp in milliseconds
console.log(myTimeStamp); // Timestamp
console.log(myTimeStamp.toString()); // String representation of the timestamp
console.log(myTimeStamp.toLocaleString()); // Locale-specific timestamp format
// console.log(myTimeStamp.getTime()); // Date from the timestamp

console.log(myDate.getTime() === myAnotherDate.getTime()); // Compare two dates

console.log(myDate.toLocaleDateString("en-In",
    {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "longOffset"
 }
)
)