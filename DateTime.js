const dateTime = new Date(); //Creating a date object, new Date() gives current date and time.
const date = dateTime.toDateString(); // Returns date portion of date object as a String
const time = dateTime.toLocaleTimeString(); // Returns the time portion of date object as a String.
console.log('Date: '+ date); //logging the Date portion
console.log('Time: '+ time); //logging the time portion