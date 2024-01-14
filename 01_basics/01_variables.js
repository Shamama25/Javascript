const accountId = 122553
let accountEmail = "shamamatarif@gmail.com"
var accountPassword = "12345"
accountCity = "Gujranwala"
let accountState;

// accountId = 2    //not allowed
accountEmail = "shamama@gmail.com"
accountPassword = "abcde"
console.log(accountId);
/*
Prefer not to use var 
because of issue in blockscope and functional scope
*/

console.log([accountId, accountEmail, accountPassword, accountPassword, accountState]);