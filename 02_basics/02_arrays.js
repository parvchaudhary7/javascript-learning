const marvel_heros=["ironman","spiderman","thor"]
const dc_heros=["superman","flash","batman"]
//marvel_heros.push(dc_heros)
////console.log(marvel_heros);// it make array inside an array
//console.log(marvel_heros[3][1]);//way to access
console.log("                 ");

const all_heros=marvel_heros.concat(dc_heros)//returns an array with simmple merge
console.log(all_heros);
// spread operator important
const all_new_heros= [...all_heros, ...dc_heros]
console.log(all_new_heros);
//important
const new_array =[1,3,[4,23,2],7,8,[5,3,2,[3,7]]]
const real_array=new_array.flat(Infinity)
// conversion to array and check aray
console.log(Array.isArray("hello"));
console.log(Array.from("hello"));
console.log(Array.from({name:"hello"})); // interesting for interviews because it give empty answer
// values ka array bnao
const h1=100
const h2=200
const h3=400 
console.log(Array.of(h1,h2,h3));


