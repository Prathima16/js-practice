//readline sync
const readlineSync = require("readline-sync");
const userName = readlineSync.question("What is your name?");
const  userAge = readlineSync.question("What is your age?");
console.log(`welcome ${userName} to our website`);
console.log(`you are ${userAge} years old`);

const yeaOfBirth = 2022-userAge;
console.log(`you were born in ${yeaOfBirth}`);