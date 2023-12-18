// Dates

let myDate = new Date()
console.log(myDate.toString()); // => mon dec 18 2023 5:37:15
console.log(myDate.toDateString()); // => mon dec 18 2023
console.log(myDate.toLocaleString()); // =>12/18/2023, 5:37:15 AM
console.log(myDate.toLocaleDateString()); // =>12/18/2023

console.log(typeof myDate); // =>object


let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString()); // =>mon jan 23 2023

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3) // =>in js months starts from 0. for e.x. 0 = jan, 1=feb, etc...
console.log(myCreatedDate2.toLocaleString()); // =>1/23/2023, 5:03:00 AM