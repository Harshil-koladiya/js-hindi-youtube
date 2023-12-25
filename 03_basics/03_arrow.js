const user = {
    username: "harshil",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
    }
}

// user.welcomeMessage() // =>harshil welcome to website
// user.username = "sam"
// user.welcomeMessage() // =>sam welcome to website

// console.log(this); // => {}

// function chai(){
//     let username = "harshil"
//     console.log(this.username); // =>undefined
// }
// chai()

// const chai = function(){
//     let username = "harshil"
//     console.log(this.username); // =>undefiend
// }
// chai()
   
// ++++++++++++++++++ arrow fxn ++++++++++++++++++++++


// =>arrow fxn syntex

// () => {}
// or 
// () => () 



// const chai2 = () => {
//     let username = "harshil"
//     console.log(this); // =>{}
//     console.log(this.username); // =>undefiend

// }
// chai2()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// } 

// =>explicite return ke jayre return key word no use karvo pade ane {} ave atle return key word lagavo j pade

// const addTwo = (num1, num2) =>  num1 + num2  // =>implicite return
                     // or
// const addTwo = (num1, num2) =>  (num1 + num2) // =>jayre () use karvi tayre return no lakhvu pade

// console.log(addTwo(3, 4)); //=> 7
 

// const addTwo = (num1, num2) => ({username: "harshil"}) //=> {} object che atle return karva mate tene () mukvu pade to error no ave

