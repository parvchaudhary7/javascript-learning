let name = " parv"
let repoCount =50
console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);//use back ticks it is modern
// delcaring method 2 for string
let gameName = new String("contra")
console.log(gameName[0]);//0->c key value pair as it is an object sring is an object
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));
console.log(gameName.substring(0,4));//include,exclude no neagtive if wee gave it consider it as positive 0 and begins from 0
let anothername =gameName.slice(-8,4)
console.log(anothername);// in slice we can give neagetive values as well
const newStringOne = " parv   "
console.log(newStringOne);
console.log(newStringOne.trim());
const url =" https://hello.com/parv%20chaudhary"
console.log(url.replace('%20','-'))
console.log(url);//no change beacuse uses stack adn is primitive data type and creates copy and call by value
console.log(url.includes('parv'));
console.log(url.split("-"));









