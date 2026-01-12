//comparison operators
//==,>=,<=,!=,===,!==
console.log(50>30);
console.log(50<30);
console.log(50>=30);
console.log(50==40);

//string comparison
console.log("apple"=="apple");
console.log("apple"=="Apple");
console.log("apple">"banana");
console.log("apple"<"banana");
console.log("glow">"glowing");
console.log("glow"<"glowing");

console.log("a">"A");
console.log("2"<1);
console.log("2">1);
console.log("01"==1);  
console.log("01"===1);

//null and undefined
console.log(null==undefined);  //true
console.log(null===undefined);  //false
console.log(null>undefined);   //false
console.log(null<undefined);  //false
console.log(null>=undefined);  //false
console.log(null<=undefined);  //false
console.log(null!=undefined);  //true
console.log(null!==undefined);  //true
console.log(null==0);  //false
console.log(null===0);  //false
console.log(undefined>null);  //false
console.log(undefined<null);  //false
console.log(undefined>=null);  //true
console.log(undefined<=null);  //true
console.log(undefined==null);  //true
console.log(undefined===null);  //false
console.log(null<1);  //true
console.log(null>1);  //false
console.log(null>=0);  //true
console.log(null<=0);  //true

3<=5  //true
"mango">"banana";  
"2">"3";
"undefined"==null;  //false
"undefined"===null;  //false
undefined==null;  //true
undefined===null;  //false

//Conditional statements
//if statement
const isLoggedIn = true; 
//const isLoggedIn = false; //no output
if(isLoggedIn){
  console.log("user is logged in");
}

//const uAge= 18;
//if(uAge>=18){
 // console.log("user is eligible to vote");
//}//output

const uAge= 8;
if(uAge>=18){
 console.log("user is eligible to vote");
}//no output



const readline = require('readline-sync');
//if else statement
const aagee = readline.question("how old are you? ");
if(aagee>=18){
  console.log("user is eligible to vote");
}else {
  console.log("user is not eligible to vote");
} 
//if else if statement

const no= Number(readline.question("Enter a number: "));
const remaiderAfterdivisionByThree = no%3;
const remaiderAfterdivisionByFive = no%5;
if(remaiderAfterdivisionByThree===0){
  console.log("fizz");
}else  if(remaiderAfterdivisionByFive===0){
  console.log("buzz");
}

//Logical operators
//AND(&&),OR(||),NOR
const remaiderBy2 = no%2;
const remaiderBy6 = no%6;
const remaiderBy7 = no%7;
if(remaiderBy2===0 && remaiderBy6===0){
  console.log("fizz");
  
}else  if(remaiderBy2===0 || remaiderBy6===0){
  console.log("buzz");
} else if(remaiderBy7===0){
  console.log("Fizzbuzz")
}else{
  console.log("not divisible by 2,6,7");
}

//Nested conditional statements
const  numA = Number(readline.question("Enter a number: "));
const remainder = numA%2;
if(remainder===0){
  console.log(`${numA} is even`);
  if (numA%4===0){
    console.log(`${numA} is divisible by 4`);
  }else{
    console.log(`${numA} is not divisible by 4`);
  }
}else{
  console.log(`${numA} is an odd number`);
  if(numA%5===0){
    console.log(`${numA} is divisible by 5`);
  }else{
    console.log(`${numA} is not divisible by 5`);
  }
}

//Exercises

//1 print the smallest string among 3 strings
const fstring="Apple";
const sstring="Banana";
const tstring="Watermelon";

const  fstringLength = fstring.length;
const  sstringLength = sstring.length;
const  tstringLength = tstring.length;

if(fstringLength<sstringLength && fstringLength<tstringLength){
  console.log(`${fstring} is the smallest string`);
}else if(sstringLength<fstringLength && sstringLength<tstringLength){
   console.log(`${sstring} is the smallest string`);
}else if(tstringLength<fstringLength && tstringLength<sstringLength){
   console.log(`${tstring} is the smallest string`);
}else{
  console.log("All strings are of equal length");
}