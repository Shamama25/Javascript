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

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Shamama"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){   //rest operator ...num(means pack items in bundle and return)
    return num1
}
// console.log(calculateCartPrice(2,4,6));

const user = {
    username: "shamama",
    price: 500
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// console.log(handleObject(user));
handleObject({
    username: "sam",
    price: 200
})

const arr = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(arr));
// console.log(returnSecondValue([200,400,500,600]));