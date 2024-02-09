//  Immediately Invoked Function Expressions (removing pollution of global scope variables)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

//(function)(execution call) 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("shamama");

//when write two IIFE in same file then use semi-colon at last