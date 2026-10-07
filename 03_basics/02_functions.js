//fucntions
//rest and spread function 
function hello(...num1){//this will merge the data and put it in one pacakge that is array
    return console.log(num1);
    
}
//if we are passing more than 1 argument so we use rest
//hello(200,300,400)
//how to pass object as parameter
const user1= {name:"parv", "age":21}
function hello1(anyobject){
    console.log(`my name is ${anyobject.name} and my age is ${anyobject["age"]}`)
}
hello1(user1)
//for arrays
const arr =[10,20,30,60,70]
function hello2(helloarray){
    return helloarray[4]
}
console.log(hello2([10,40,50,60,20,50,70]));
