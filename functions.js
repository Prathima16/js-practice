//funcions
//function declaration
function greet() {
  console.log("hello world");
}
greet();//function call
greet();//function call

//paramenters and arguments
function greetUser(userName) { //parameter
  console.log(`hello ${userName}`);
}
greetUser("Prathima");//argument
greetUser("Naresh");

//mulitple parameters and arguments
function addTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
}
addTwoNumbers(10, 20);
addTwoNumbers(100, 200);
addTwoNumbers(1000, 2000);
addTwoNumbers(10000, 20000);

//city and nmae
function greetUser1(userName, city) {
  console.log(`hello ${userName} from ${city}`);
}
greetUser1("Prathima", "Karachi");
greetUser1("Naresh", "Hyderabad");
greetUser1("Suresh", "Mumbai");
greetUser1("Ramesh", "Delhi");

//sum of all numbers from 1 to 10
function sumOfNumbers(min, max) {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
sumOfNumbers(1, 10);

//
//addition of two numbers
function addTwoNumbers(n1, n2) {
  let n3 = n1 + n2;
  console.log(n3);
}
addTwoNumbers(10, 20);
addTwoNumbers(100, 200);
addTwoNumbers(1000, 2000);

function addTwoNumbersReturns(a, b) {
  return a + b;
}
const res = addTwoNumbersReturns(10, 20);
console.log(res);
console.log(addTwoNumbersReturns(100, 200));
console.log(addTwoNumbersReturns(1000, 2000));

//square of a number
function square(sqr) {
  let result = sqr * sqr;
  console.log(result);
}
square(5);
square(10);
square(15);

//or

function squareReturns(sqr) {
  let result = sqr * sqr;
  return result;
}
console.log(squareReturns(5));
console.log(squareReturns(10));

///odd or even
function oddeven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}
oddeven(10);

///maximum of two numbers
console.log("maximum of two numbers");
function max(a, b) {
  if (a > b) {
    console.log(`${a} is greater than ${b}`);
  } else {
    console.log(`${b} is greater than ${a}`);
  }
}
max(10, 50);
max(800, 500);

//simple calculator
function simpleCaculator(num1, num2, operator) {
  if (operator === "*") {
    console.log(num1 * num2);
  } else {
    console.log("invalid operator");
  }
}
simpleCaculator(50, 100, "*");
simpleCaculator(50, 100, "+");
simpleCaculator(50, 100, "-");

//celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
console.log(celsiusToFahrenheit(37));// 98.6
console.log(celsiusToFahrenheit(40));// 104

//fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}
console.log(fahrenheitToCelsius(98.6));// 37
console.log(fahrenheitToCelsius(104));// 40

//facorial of a number
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(5));// 120
console.log(factorial(10));// 3628800

//prime number
function primeNumber(num) {
  if (num % 2 === 0) {
    console.log(`${num} is a prime number`);
  } else {
    console.log(`${num} is not a prime number`);
  }
}
primeNumber(5);
primeNumber(10);

//counte vowels in a string
function countVowels(str){
   let count = 0;
   for(let i=0;i<str.length;i++){
     if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
       count++;
       console.log(count);
     }
   }  
}
countVowels("prathima");
countVowels("javascript");

//reverse a string
function reverseString(str){
  let reversedString = "";
  for(let i=str.length-1;i>=0;i--){
    reversedString += str[i];
  }
  return reversedString;
}
console.log(reverseString("prathima"));

//sum of digits
function sumOfDigits(num){
  let sum = 0;
  while(num>0){
    sum += num%10;
    num = Math.floor(num/10);
  }
  return sum;
}
console.log(sumOfDigits(12345));

//palindrome
function palindrome(str){
  let reversedString = "";
  for(let i=str.length-1;i>=0;i--){
    reversedString += str[i];
  }
  if(str===reversedString){
    console.log(`${str} is a palindrome`);
  }else{
    console.log(`${str} is not a palindrome`);
  }
}
palindrome("madam");
palindrome("prathima"); 

