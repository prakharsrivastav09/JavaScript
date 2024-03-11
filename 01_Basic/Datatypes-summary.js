//Primitive Data Type
// 1. String,Number,Boolean,null,Undefined,Symbol,Bigint
//Non Primitive
//1 Reference, Array, Objects, Functions
const score = 100;
const scoreValue = 100.3;
const loggedIn = null;

const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id===anotherid);

const Bignumber = 424242345454343n
console.log(Bignumber);

const heros = ['Shaktiman','naagraj','doga']
 let myObj = {
    name: "PRAKHAR",
    age: 23,

}

//Function
const myFunction = function() {
    console.log("Hello World");

}

console.log(typeof Bignumber);
console.log(typeof scoreValue);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof id);
console.log(typeof anotherid);
console.log(typeof heros);
console.log(typeof myObj);


//// Stack and heap ///

/// Stack always use in primitive data type 
///Heap is always use in non primitive data types

let myCollege = "LovelyProfessionalUniversity";
let anothermyCollege = "Newcollege";

anothermyCollege = "KNIPSS"

console.log(myCollege);
console.log(anothermyCollege);

let userone = {
    name: "Prakhar",
    email: "Pkdkdvkm@gmail",
     upi: "912000877"
}

let userTwo = userone;
userTwo.email = "prakharsrivastav45@gmail.com"

console.log(userone.email);
console.log(userTwo.email);