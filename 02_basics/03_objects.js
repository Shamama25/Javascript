//singleton
// Object.create   

//object literals

const mySym = Symbol("key1")

const JSuser = {
    name: "Shamama",
    "full name":  "Shamama Tarif",
    [mySym]: "mykey1",
    age: 20,
    location: "Gujranwala",
    email: "shamamatarif@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["full name"]);
// console.log(JSuser[mySym]);

JSuser.email = "shamamatarif6@gmail.com"
// Object.freeze(JSuser)
// console.log(JSuser);
JSuser.email = "shamamtarif@microsoft.com"
// console.log(JSuser)

JSuser.greeting = function(){
    console.log("Hello JS User!");
}

JSuser.greetingTwo = function(){
    console.log(`Hello JS User!, ${this.name}`);
}
console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());