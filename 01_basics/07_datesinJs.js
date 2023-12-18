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

let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate3.toLocaleString()); // =>1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()  //=> .now() karwathi apne 1970 thi aaj ni date sudhi mili second return male

console.log(myTimeStamp); // => 1702984743739
console.log(myCreatedDate3.getTime()); // =>16307823904
console.log(Math.floor(Date.now()/1000)); // => ans jayre second ma jotvo hoy tyare aa no use karvo pan comaprision to mili second ma j karvo

// ano use pole nu result jaher karvu tyare, hotel ticket booking vakhte kone pela book kari te aana comaprision thi mali jay

let newDate = new Date()
console.log(newDate.getMonth() + 1); // =>12
console.log(newDate.getDay());  // =>1(monday)

newDate.toLocaleDateString('default',{
    weekday: "long",
})