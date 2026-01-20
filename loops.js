//for loop,while loop,do while loop

//for loop
for(let i=0;i<=10;i++){
  console.log(i);
  console.log("hello world");
}
console.log("loop ended");

for(let i=1;i<=100;i++){
  console.log(i);
}
console.log("loop ended");

//to print every charecter on next line,we use indexing
const uName = "Prathima S Thorat";
const stringLength = uName.length;
for(let i=0;i<stringLength;i++){
  console.log(uName[i]);
}

const symbol = "**@&%!$#";
const symbolLength = symbol.length
for(let i=0;i<symbolLength;i++){
  console.log(symbol[i]);
}

//nested fpr loop
//for lopp inside another for loop
for(let i=1;i<=10;i++){
  for(let j=1;j<=12;j++){
    let result = i*j;
    console.log(`${i}*${j}=${result}`);
  }
}
console.log("------------------------------");

//exercise:for loop
//print the sum of all numbers from 1 to 100
let sum = 0;
for(let i=0;i<=100;i++){
  sum = sum+i;//sum+=i
  console.log(sum);
}

//star  pattern
const star = "*";
for(let i=1;i<=5;i++){
  console.log(star.repeat(i));/*repeat method is used to repeat the string*/
}

//REVERSE star pattern
for(let i=5;i>=1;i--)
{
  console.log(star.repeat(i));
}

//joining two strar patterns

let symbol1=5;
for(let i=1;i<=5;i++){
  console.log("*".repeat(i));
}
  for(let i=symbol1-1;i>=1;i--)
{
  console.log("*".repeat(i));
}

//finding the number of caharcters in a string
const str = "Prathima S Thorat";
let count = 0;
for(let i=0;i<str.length;i++){
  count++;
}
console.log(`number of character in the string is ${count}`);

//find all evn numbers from 1 to 100
let remainder1;
for(let i=1;i<=100;i++){
  remainder1 = i%2;
  if(remainder1===0){
    console.log(`${i} is an even number`);
  }else{
    console.log(`${i} is an odd number`);
  }
}

//checking vowels  in a string
const str1 = "Prathima S Thorat";
const vowels = "aeiouAEIOU";
for(let i=0;i<str1.length;i++){
  if(vowels.includes(str1[i])){
    console.log(`${str1[i]} is a vowel`);
  }else{
    console.log(`${str1[i]} is not a vowel`);
  }
}

//divisible by 4,5,7&9 for 1 to 100
for(let i=1;i<=100;i++){
  if(i%4===0){
    console.log(`${i} is divisible by 4`);
  }else if(i%5===0){
     console.log(`${i} is divisible by 5`);
  }else if(i%7===0){
    console.log(`${i} is divisible by 7`);
} else if(i%9===0){
    console.log(`${i} is divisible by 9`);
}else{
    console.log(`${i} is not divisible by 4,5,7,9`);
}
}

//while loop
let i1=1;
while(i1<=10){
  console.log(i1);
  i1++;
}

//do while loop
let i2=1;
do{
  console.log(i2);
  i2++;
}  while(i2<=10)

//exercise:while loop 
//user enters a number ,if the number is less than 50,ask the user to enter a number less than 50 again
let readlineSync = require('readline-sync');
let num = Number(readlineSync.question("Enter a number: "));
while(num>=50){
  console.log("Enter a number less than 50");
  num = Number(readlineSync.question("Enter a number: "));
}
console.log("you entered a number less than 50");

//error handling-try catch
const pName = "Prathima";
try{
  console.log(pName.toUpperCase());
   console.log(pName.toLowerCase());
}  catch(error){
  console.log(error);
   console.log("error.name");
   console.log("error.message");
   console.log("error.stack");

}  finally{
  console.log("this will always run");
}
console.log("code after error handling");