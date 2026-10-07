//oject as singleton
//const tinderUser = new Object()//singleton
const tinderUser ={}//non singleton using literals
tinderUser.id=123
tinderUser.name="helloji"
tinderUser.gender="M"
tinderUser.IsLoggedIn=false
console.log(tinderUser);
const regularUser= {email:"someone@gmail.com",fullName:{userFullName: {firstName:"parv",secondName:"chaudhary"}}}
console.log(regularUser.fullName.userFullName.secondName);
//++++++++++++++++combing objects++++++++\
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
//mistake
//const obj3={obj1,obj2}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);
//spread operator
const obj4= {...obj1,...obj2}
console.log(obj4);
//array of objects
const arr =[{name:"parv", age:21},{game:"chess",rating:1600}]
console.log(
arr[1].game);
//leys and values and entries
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("gender"));
