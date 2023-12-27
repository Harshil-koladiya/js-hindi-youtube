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
    console.log(programming[key]);
}



// const map = new Map()
// map.set('IN',"india")
// map.set('USA',"United States of America")
// map.set('FR', "France")
// map.set('IN',"india")

// for (const key in map) {
//     console.log(key);
// }