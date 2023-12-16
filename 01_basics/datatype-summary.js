// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const name = "harshil"
  
const score = 100
const scoreValue = 100.03

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  // =>false

const bigNumber = 354662884902n



//Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"];

let myObj = {
    name : "harshil",
    age : 18,
}

const myFunction = function(){
    console.log("hello world");
}

// typeof
//primitive ma je type hoy te j ave example string nu string, number nu number, undefined nu undefined etc
// but null no type object ave ane bigInt no type undefined ave

// non-primitive ma badha no type object j ave
// function => object function ave
