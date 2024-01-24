//  Primitive (call by memory, don't give address, make changess in copy)

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34562938548549591425n


//Non-Primitive (Refernce Type) => directly allocate addresses

//  Array, Objects, Functions

const heros = ["super-man", "bat-man", "iron-man"];
let myObj={         //anything declared in curly braces is object
    name: "heroname",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world!");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof heros);


//Stack(Primitive),   Heap(Non-Primitive)

let youtubeName = "Javascript Concepts";
let anotherName = youtubeName
anotherName ="chai aur code" 

console.log(youtubeName);