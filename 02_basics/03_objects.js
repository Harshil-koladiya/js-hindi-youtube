// singleton
//object.create (constructor method)



// object literals

const mysym = Symbol(mykey) // =>symbole ne define karvu pade object ma use karva pela


const Jsuser = {
    name: "harshil",
    "full name": "harshil koladiya",
    [mysym]: "mykey1", // symbole no syntex yaad rakhvo
    age: 18,
    location: "surat",
    email: "harshil11@gmail.com",
    lastLogedinDays: ["monday", "saturday"]
}


// console.log(Jsuser.name); // => harshil
// console.log(Jsuser["name"]); // => harshil
// console.log(Jsuser["full name"]); // =>harshil koladiya
// console.log(Jsuser[mysym]); // =>myKey1

Jsuser.email = "harshilkoladiya.com"
// Object.freeze(Jsuser)
Jsuser.email = "harshil.com"
// console.log(Jsuser); // freeze pachi nu change no thay object ma

// jsuser ma function add karyu greeting name api
Jsuser.greeting = function(){
    console.log("hello js user");
}


// jsuser ma function add karyu greetingTwo name api
Jsuser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
 // this no use te j object ma koy parameter  hoy ane tema j define karla function ma fari thi  use karvo hoy as refrence tyare tene   this.___ no use thay

console.log(Jsuser.greeting()); // => hello js user
console.log(Jsuser.greetingTwo());// => hello js user, harshil

// function ne print karvu hoy tyare je name ma save karyu te name ni pachal () lagavu upper example apya che

