//  const tinderUser = new Object() // => single ton object
// const tinderUser = {} // => non single ton object

// console.log(tinderUser); // => {} bane nu output aa j ave khali object no type change thay

// tinderUser.id = "123abc"
// tinderUser.name = "harhsil"
// tinderUser.isLoggedIn = false

// aa rite aa {} khali object ma add kari sakay
 
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "harshil",
            lastname: "koladiya"
        }
    }
    
}
 console.log(regularUser.fullname.userfullname.firstname); // => harshil

 