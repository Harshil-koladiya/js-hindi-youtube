// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }

const greetings = "hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


// maps

const map = new Map()
map.set('IN',"india")
map.set('USA',"United States of America")
map.set('FR', "France")
map.set('IN',"india") // =>unique value mate famous che map atle ek ni ek value biji var nay dekhade


console.log(map);

for (const key of map) {
    console.log(key); // => ['IN", 'india'] aa rite key ane value bane array na form ma avi jay che
}


for (const [key, value] of map) {
    // console.log(key, ':-', value); // => ['IN", 'india'] aa rite key ane value bane array na form ma avi jay che
}


const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
} 

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);  // gives error (myObject is not iterable)
// }