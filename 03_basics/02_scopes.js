let a = 100
// const b = 20
// var c = 300

if(true){
    let a = 10
    // const b = 20
    // c = 30
    // console.log("Inner: " ,a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "shamama"

    function two(){
        const website = "github"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true) {
    const username = "shamama"
    if(username === "shamama"){
        const website = "github"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);





//-----------Interesting---------------

function addone(num){
    return num + 1
}
console.log(addone(5));

const addTwo = function(num){
    return num + 2
}
addTwo(5)