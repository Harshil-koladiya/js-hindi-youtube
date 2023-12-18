// array

const myArr = [1, 2, 3, 4, 5, 6]
const myArr2 = new Array(1,2,3,4)

console.log(myArr[0]); // => 1


// array methods

myArr.push(7) // =>add in last  [1,2,3,4,5,6,7]
myArr.pop() // =>remove last value of array for example [1,2,3,4,5,6]

myArr.unshift(0) // =>add in start [0,1,2,3,4,5,6]
myArr.shift()  // =>remove from start [1,2,3,4,5,6]

console.log(myArr.includes(9)); // =>false
console.log(myArr.indexOf(9)); // => -1



const newArr = myArr.join()  // =>array transform into string

console.log(newArr);          // =>1,2,3,4,5,6
console.log(typeof newArr);   // => string



// slice, splice



console.log("A", myArr); // =>A [1, 2, 3, 4, 5, 6]

const myn1 = myArr.slice(1,3)
console.log(myn1);    // =>[2, 3]

// slice ma last index count karva ma nathi avto ane jtle index sudhi slice no use karva ma ave che tetla element ni copy apavma ave che teni main array par kay asar nathi thati 



console.log("B", myArr); // =>B [1, 2, 3, 4, 5, 6]

const myn2 = myArr.splice(1,3)
console.log(myn2);   // =>[2, 3, 4]
console.log("c",myArr); // =>c [1, 5, 6]


// splice ma last index count karva ma ave che ane jetla index sudhi splice no use karva ma ave che tetlo bhag main array mathi kapay jay che ane teni sivay na j element main array ma vadhe