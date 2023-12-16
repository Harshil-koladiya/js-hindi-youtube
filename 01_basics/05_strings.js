const name = "harshil"// first type
const repoCount = 50

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('harshil-vk')  // => second type of call string


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName[0]);
console.log(gameName.charAt(5));
console.log(gameName.indexOf('i'));
console.log(gameName.split('-'));



const newString = gameName.substring(0,5) 
console.log(newString);  // =>harsh

const anotherString = gameName.slice(-8,4) // =>(10-8,4)
console.log(anotherString); // =>rs


// => bane ma last value include no thay.diff khali slice ma e che ke tema negative value lay sakay

const newStringOne = "   harshil  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://harshil.com/harshil%20koladiya"
console.log(url.replace('%20','-')); 
console.log(url.includes('harshil')); // =>true


