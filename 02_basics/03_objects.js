//objects
//constuctor ko call krke singleton object banta hai
//and literlas se nhi
//literals
let obj={name:"parv",age:10,another_obj:[10,20,30],"email":"parv@gmail.com"}//isme name and age already ek sting hai
console.log(obj.name);//
console.log(obj.another_obj);//these both are not correct method to access
//correct method is
console.log(obj["email"]);//correct and best method
//++++++++++++++++++++++++symbols+++++++++++++++++
const hello = Symbol("key1")
 obj={name:"parv",age:10,another_obj:[10,20,30],"email":"parv@gmail.com", [hello]:"key1"}
 console.log(typeof hello);
 obj.email="hello@gmail.com"
 //Object.freeze(obj)
 obj.email="jpg@gmail.com"
console.log(obj["email"]);
//++++++++++++++++++++++creating own functions in obj+++++++++++++
obj.greetings = function(){
    console.log(`hey goooooddd morning ${this.name}`);
    
}
console.log(obj.greetings());
