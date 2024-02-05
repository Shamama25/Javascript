function sayName(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("M");
    console.log("A");
}
// sayName()

// function addTwoNumbers(n1, n2){
//     console.log(n1 + n2);
// }

// const result = addTwoNumbers(3, 4)
// console.log("Result: " ,result);

function addTwoNumbers(n1, n2){
    // let result = n1 + n2
    // return result

    return n1+n2;
}
const result = addTwoNumbers(5,4)
// console.log("Result: ", result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Shamama"));
console.log(loginUserMessage());