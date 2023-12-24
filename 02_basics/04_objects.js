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
//  console.log(regularUser.fullname.userfullname.firstname); // => harshil

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}

// const obj3 = {obj1, obj2} // => {obj1: {'1':'a', '2':'b'}, obj2:{'3':'a','4':'b'}}

// const obj3 = Object.assign({}, obj1, obj2) //=>{'1':'a', '2':'b','3':'a', '4':'b'}

const obj3 = {...obj1, ...obj2} // =>{'1':'a', '2':'b','3':'a', '4':'b'}
// console.log(obj3);


const users =[
    {
        id: 1,
        email:"harshil11@.com"
    },
    {
        id: 2,
        email:"harshil21@.com"
    },
    {
        id: 3,
        email:"harshil31@.com"
    },
]

// console.log(users[1].email); // =>harshil21@.com

// console.log(tinderuser); // =>{id : "123abc",name : "harhsil,isLoggedIn : false}

// console.log(Object.keys(tinderuser)); // =>['id', 'name', 'isLoggedIn]
// console.log(Object.values(tinderuser)); // =>['123abc','harshil', false]
// console.log(Object.entries(tinderuser)); // =>[['id', '123abc'],['name','harhsil'],['isLoggedIn', false]]


console.log(tinderuser.hasOwnProperty('isLoggedIn')); // =>true

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "harshil"
}

// course.courseInstructor // =>method 1

const {courseInstructor: Instructor} = course // =>method 2

// console.log(courseInstructor);
console.log(Instructor);