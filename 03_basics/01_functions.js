//functions
// function sayMyName(){
//     console.log("P");
//     console.log("a");
//     console.log("r");
//     console.log("v");
    
    
    
    
// }
// sayMyName()
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
    
// }
function addTwoNumbers(number1,number2){
    
    let result =number1+number2;
    return result;
}
const result=addTwoNumbers(3,4)
//console.log("result",result);
function IssLoggedIn(username){
    if(!username){//username===undefined
        console.log("please enter user name");
        
        return
    }
   return `${username} is loogged in`
}
console.log(IssLoggedIn())