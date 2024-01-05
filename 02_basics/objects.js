//singleton object - by using constructor => Object.create()
//non-singleton - by using simple { }
// const mysym = Symbol("key1");
// const jsUser = {
//     name:"Hrishikesh",
//     age:18,
//     [mysym]: "myKey1",
//     location:"xyz",
//     email: "abc@gmail.com",
//     isLoggedIn: false,
//     lastLoggedIn : ["monday", "saturday"],
//      greetings: function(){
//         console.log("method");
//     }
   

// } 

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser[mysym]);


// jsUser.email = "xyz@gmail.com";
// Object.freeze(jsUser);  //freeze object

// jsUser.name = "pqr";
// console.log(jsUser); 
// // jsUser.greetings();

// const obj1 = {
//     1:"a",
//     2:"b"
// }   
// const obj2 = {
//     3:"a",
//     4:"b"
// }   

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);



const user1 = [
    {
        id:1,
        email: "abc@gmail.com"
    },

    {
        id:1,
        email: "abc@gmail.com"
    },

     {
        id:1,
        email: "abc@gmail.com"

    },

    {
        id:1,
        email: "abc@gmail.com"
    }
]

