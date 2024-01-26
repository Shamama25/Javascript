const name = "shamama"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`hello my name id ${name} and my repo count is ${repoCount}`);

const gameName = new String('Candy-Crush')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(7));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "      shamama     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://youtube.com/java%20script";
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));