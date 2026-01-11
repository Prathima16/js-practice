//string
let username = "Prathima";
let subject  = "javascript";

console.log(username);
console.log(subject );
console.log(typeof username)

//number
let num = 25;
console.log(num);
console.log(typeof num);

let num1 = 25.5;
console.log(num1);
console.log(typeof num1);

//booleans
let isProductInCart = false;
console.log(isProductInCart);
console.log(typeof isProductInCart);

let isLoggedInCart = true;
console.log(isLoggedInCart);
console.log(typeof isProductInCart);

//uNDEFINED
let name;
console.log(name);

let age ;
console.log(age);
console.log(typeof age);

//null
let numberOfStudents = null;
console.log(numberOfStudents);
console.log(typeof numberOfStudents);

let noVaue = null;
console.log(noVaue);
console.log(typeof noVaue);

//OBJECTS
let student ={name:"Prathima",age:25,isStudent:true}
console.log(student);
console.log(typeof student);

let array = [1,2,3,4,5];
console.log(array);
console.log(typeof array);
console.log(Array.isArray(array));
console.log(Array.isArray(student));

//concatenation and tamplet literals
let firstName = "Prathima";
let lastName = "S";
//console.log(firstName + " " + lastName);
console.log("My name is"+" "+firstName + " " + lastName);

//tamplet literals
let aage = 25;
//console.log(`My name is ${firstName} ${lastName}`);
console.log(`My name is ${firstName} ${lastName} and i am ${aage} years old`);


let fName = "Prathima";
let lName = "S";
let aag = 25;
let multilineText = `My name is ${fName} ${lName} and i am ${aag} years old`;//backticks
console.log(multilineText);

//Arithmetic operators
const x = 10;
const y = 5;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);
console.log(x**2);
console.log(x**3);

//Typr conversion
//string to number
const a= "10";
const b= "5";
console.log(Number("10")+Number(b));

const d= "20";
const e= "10";
const p= Number(d);
const q= Number(e);
console.log(typeof d);
console.log(typeof e);
console.log(typeof p);
console.log(typeof q);

//number to string
const f= 10;
const g= 5;
const c= String(f);
const h= String(g);
console.log(typeof f);
console.log(typeof g);
console.log(typeof c);
console.log(typeof h);

//boolean to string

const i= "30";
const j= "20";
console.log(Boolean(i));

const m= "Prathima";
const n= 0;//"0" is true and 0 is false
console.log(Boolean(n));
console.log(Boolean(m));


