// singleton
//object.create (constructor method)



// object literals

const mysym = Symbol() // =>symbole ne define karvu pade object ma use karva pela


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


Jsuser.greeting = function(){
    console.log("hello js user");
}

Jsuser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}


console.log(Jsuser.greeting()); // => hello js user
console.log(Jsuser.greetingTwo());// => hello js user, harshil