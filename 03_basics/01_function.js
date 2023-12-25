
function sayMyName(){
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("l");
}

// sayMyName()



// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);

// }

// const result = addTwoNumbers(3, 4)
// console.log(result); // => undefined
    

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 4) // =>function call karta te result je hashe te return karse ane je result name na variable ni ander save thashe

// console.log(result); // => 7


  


function loginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return // return key exicute thay pachi koy code exicute thato nathi bahle pachi kay pan value return no malti hoy
    }
    return `${username} just logged in`
}

loginUserMessage("harshil") // => kay ans nay ave kemke function khali value return kari pan tame to kya tene  save kari koy variable ma ke tene print thavanu  kidhu

// console.log(loginUserMessage("harshil")); // => harshil just logged in

// ********** imp case ********** 

// kay arrgument ke value j pass no karvi tyare
// console.log(loginUserMessage()); // => undefined just logged in

// after applying if else
// console.log(loginUserMessage()); // => please enter a username


//*********************************************************** */

// rest operater (...num) aa rite lakhay jayre bov badhi value as arrgument apva ma ave tyare te badhi ne ek array ma save karva mate

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 4000, 300, 500)); // =>[300, 500] kemke 200 ane 4000 val1 and val2 ma vay gay atle num ma baki ni vay save thay ane return pan num1 ni badhi value j kare array na form ma

const user ={
    username: "harshil",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) // =>username is harshil and price is 199

handleObject({
    username: "sam",
    price: 299
}) // => username is sam and price is 299 (method-2)


const  myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); // =>400

console.log(returnSecondValue( [200, 400, 100, 600])); // =>400


