// depending on the the way the elements are stored in meomory and are called from the memory , there are two datatyoes distinction primitive and non primtive
// primitive call by value :- 7 types... String, Number , Boolean, Null, undefined, Symbol, BigInt

//java script is dynamicall types let js= 3/"hello"/true;
 const id =Symbol("123")
 const anotherId = Symbol("123")
 console.log(id==anotherId);// false as symbol fits it as unique container or package
 


// refrence or non primitive :- arrays, object , functions
//arrays 
const hii =["hello","namaste", "bonjour"];
//object
const obj = {name:"parv", age:21}
console.log(obj);
//fucntions
const myfunction = function(){
    console.log("hello world");
    
}
