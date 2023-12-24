let a = 100
const b =200
var c = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner :",a); // =>10
}

//  console.log(a); // => 100
// console.log(b); // => 200
// console.log(c); // => 30


function one(){
    const username = "harshil"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // => (website is not defined) give error bcz of use local scope in global scope 

    two() // =>print username in function one and when we call fxn one than as return print username
}

// one() // => harshil


if(true) {
    const username = "harshil"
    if(username === "harshil"){
        const website = " youtube"
    // console.log(username + website);
    }
    // console.log(website); // => error (website is not defined)
}



// +++++++++++++++++++++++  interesting    +++++++++++++++++++++


console.log(addone(5)); // => 6

function  addone(num){
    return num + 1
}




addTwo(5) // => error (cannot access 'addTwo" before initialization)

const addTwo = function(num){
    return num + 2
}
 // => ane kok kok var fxn ni jagya expression pan kevay che