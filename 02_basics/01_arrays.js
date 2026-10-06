//arrays
const arr =[1,4,232,2,"parv"]// diffreent data type allowedd  and deep copy iss like copy of original vs shallow copy is like refrence just like heap
console.log(arr[3]);//way to access
const arr2 = new Array(1,34,2,322,2425)
arr.push(7)
console.log(arr);
arr.unshift(9)
arr.shift()// it's like pop but from starting
console.log(arr);
console.log(arr.includes(9));
console.log(arr.indexOf(9));
let newarr=arr2.join()// converts it into string
console.log(newarr);

//slice and splice
console.log(arr2.slice(1,3));//i will manipulate original array
console.log(arr2);

console.log(arr2.splice(1,3));//i will manipulate original array
console.log(arr2);






