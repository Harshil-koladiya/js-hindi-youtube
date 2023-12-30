const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}


for (const key in  myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);
}



const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(key); // => 0, 1, 2, 3, 4
    console.log(programming[key]); // => js, rb, py, java, cpp
}



// const map = new Map()
// map.set('IN',"india")
// map.set('USA',"United States of America")
// map.set('FR', "France")
// map.set('IN',"india")

// for (const key in map) {
//     console.log(key); // =>map is not iterable
// } 