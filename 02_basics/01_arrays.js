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