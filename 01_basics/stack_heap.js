// primitve data type => stack ,copy
// non primitive => heap , refrence change in original
//explanation
let name="parv"
let name2= name
name2= "chaudhary"
console.log(name);
console.log(name2);
// example of non prmitive object
let obj={
 name:"parv", age:21
}
let name3=obj
console.log(name3);
console.log(obj);
name3.name="chaudharyji"
console.log(name3);
console.log(obj);





