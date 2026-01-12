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

const num = Number(readline.question("Enter a number: "));
const remaiderAfterdivisionByThree = num%3;
const remaiderAfterdivisionByFive = num%5;
if(remaiderAfterdivisionByThree===0){
  console.log("fizz");
}else  if(remaiderAfterdivisionByFive===0){
  console.log("buzz");
}
