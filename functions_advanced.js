//anonymus function and fucntion expression
//
let anonymousFunction = function () { //function expression
  console.log("hello world");
}
console.log(typeof anonymousFunction)//function
anonymousFunction();//function call

//
console.log(aFunction);

var  aFunction = function () { //function expression
  console.log("hello world"); //function declaration
}//o/p undefined,because var is hoisted and it is not initialized
console.log(typeof aFunction);
aFunction();// o/p hello world,  because function is called after it is declared

//named function expression
let namedFunctionExpression = function namedFunction() {//named function expression
  console.log("hello world");
}
console.log(typeof namedFunctionExpression);

//
let namedFunctionExpression1 = function namedFunction() {//named function expression
  console.log("hello world");
}
console.log(typeof namedFunctionExpression1);
namedFunctionExpression1();
//namedFunction();//error,because named function is not defined in global scope
//namedFunctionExpression();//error,because named function is not defined in global scope

//
let namedFunctionExpression2 = function namedFunction() {//named function expression
  console.log("hello world");
  console.log(typeof namedFunction);// function because named function is defined in global scope
}  
console.log(typeof namedFunctionExpression2);
namedFunctionExpression2();//globle scope

//Returns and undefiend
//return is a keyword that is used to return a value from a function
//return is used to exit a function and return a value to the caller
//return is used to return a value from a function

function addTwoNumbers(a, b) {
  return a + b;
}
console.log(addTwoNumbers(10, 20));

//value in varibale
function calulateSum(a, b) {
  let sum = a + b;
  return sum;
}
let result0 = calulateSum(10, 20);
console.log(result0);

const ouput = calulateSum(10, 200);
console.log(ouput);

//pure function
//pure function is a function that always returns the same result if the same arguments are passed in
//pure function does not have any side effects
//pure function does not depend on any external state
//pure function does not modify any external state

function addition(a, b){
  return a + b;
}
const result1 = addition(1, 22);
console.log(result1);

function addition1(min, max){
  let sum = 0;
  for(let i = min; i <= max; i++){
    sum += i;
  }
  return sum; 
}
const result2 = addition1(1, 10);
console.log(result2);

//arrow function or fat arrow function 
//arrow function =>()
const  arrowFunction = () => {
  console.log("hello world");
}
arrowFunction();

//
const calculateAdd =(x,y)=> {
  return x + y;
}
console.log(calculateAdd(150, 28));

//advantages of arrow function
//1.arrow function is more concise
//2.arrow function is more readable
//3.arrow function is more flexible
//4.arrow function is more efficient

//arrow function with one parameter
const squ = (x) => {
  return x * x;
}
console.log(squ(5));

//no need to use return keyword if there is only one statement
const square1 = (x) => x * x;
console.log(square1(25));

//to find x greater than y
const greaterThan = (x, y) => x > y? x + y: x - y;
const  result3 = greaterThan(100, 20);
console.log(result3);

//exercise
//1.arrow function to find the sum of all numbers from 1 to 100
const sumOfNumber = (min, max) => {
  let sum = 0;
  for(let i = min; i <= max; i++){
    sum += i;
  }
  return sum;
}
const result4 = sumOfNumber(1, 100);
  console.log(result4);

  //2.arrow function to find the factorial of a number
  const factorial1 = (num) => {
    let result = 1;
    for(let i = 1; i <= num; i++){
      result *= i;
    }
    return result;
  }
  const result5 = factorial1(5);
  console.log(result5);

//sum of number from 1-20 using fucntion expression
function calculateSumofNumbers(min, max) {
  let total  = 0;
  for(let i = min; i <= max; i++){
    total += i;
  }
  return total;
}
const result6 = calculateSumofNumbers(1, 20);
console.log(result6);
const result7 = calculateSumofNumbers(20, 100);
console.log(result7);

//working with map and set collections
//map is a collection of key value pairs
//map is a collection of unique keys
//map is a collection of unique values
//syntax: let map = new Map();
//map.set(key, value);
//map.get(key);
//map.has(key);
//map.delete(key);
//map.clear();
let map = new Map();
map.set("name", "Prathima");//set method is used to add key value pairs to the map
map.set("age", 25);
map.set("city", "Karachi");
console.log(map);
console.log(map.get("name"));//get method is used to get the value of the key
console.log(map.has("name"));//has method is used to check if the key exists in the map
console.log(map.delete("name"));//delete method is used to delete the key value pair from the map
console.log(map.clear());//clear method is used to clear the map
console.log(map);
console.log(map.size);//size property is used to get the size of the map
console.log(map.keys());//keys method is used to get the keys of the map

//forech method
//forech method is used to iterate over the map
//syntax: map.forEach((value, key) => {})
let map1 = new Map();
map1.set("name", "Prathima");
map1.set("age", 25);
map1.set("city", "Karachi");
map1.forEach((value, key) =>{
  console.log(key, value);
});
map1.has(10)
console.log(map1.has(10));

//set is a collection of unique values
//set is a collection of unique keys
//set is a collection of unique values
//syntax: let set = new Set();
//set.add(value);
//set.has(value);
//set.delete(value);

let set = new Set();
set.add("Prathima");
set.add("age", 25);
set.add("city", "Karachi");
console.log(set);
   console.log(set.has("Prathima"));
   console.log(set.delete("Prathima"));
   console.log(set.clear());
   console.log(set);
   console.log(set.size);
   console.log(set.keys());
   console.log(set.values());
   console.log(set.entries());

   console.log(set.forEach((value) =>{
     console.log(value);
    }));
    console.log(set.has(10));
    console.log(set.has("Prathima"));
    console.log(set.has("age"));
   console.log(set.has("city"));
