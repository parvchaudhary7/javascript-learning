//
const obj = {
    name:"parv",
    age:21,
    welcomeMessage: function greetings(){
       return ` ${this.name} , welcome to my website `
    }
}
console.log(obj.welcomeMessage());
//this is mostly or only used with object not with fucntions




function hello1(){
    let user="parv"
   // console.log(this.username);
    
}
// hello1()//gives undefined as it is a function
//////////
//so we use arrows with functions
const chaii = () => {
      const users = "parv"
      console.log(this.users);
}
chaii()
//adding two numbers
let add = (num1,num2) => (num1+num2)
console.log(add(4,3));
