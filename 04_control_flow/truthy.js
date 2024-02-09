const userEmail = "sh@mama.ai"

if(userEmail){
    console.log("Got user email");
} else{
    console.log("Don't have user email");
}

//falsy values
// false, 0, -0, BigInt on, "", null, undefined, NaN

//truthy values
//"0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("array is empty");
// }

const embtyObj = {}

if(Object.keys(embtyObj).length === 0){
    console.log("Object is empty");
}