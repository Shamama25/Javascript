const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming= ["js", "rb", "python", "java", "c++"]
for (const key in programming) {
    // console.log(key);   // 0 1 2 3 4 
    console.log(programming[key]);
}

const map = new Map()   //map is not iteratable
map.set('PAK', "Pakistan")
map.set('IND', "India")
map.set('USA', "United State of America")

for (const key in map) {
    console.log(key);
}