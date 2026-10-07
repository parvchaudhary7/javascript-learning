//scopes
//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);
function one(){
    let game="chess"
    function two(){
        let username="parv"
        console.log(game)

    }
    //console.log(username);
    two()
}
one()
if (true) {
    username="parv"
    if(username==="parv"){
        const website = "github"
        console.log(website + username);
        
    }
    ///console.log(website);
    
}
//console.log(username);
/////////+++++++++++++++interesting method++++++++
addtwo(6)//this will give error but if we didnt hold it then it will not give error
const addtwo = function addone(addone1){
    return addone1+1
}
addtwo(6)