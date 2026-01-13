//{condition}?{statement1}:{statement2}
//old method
const totalmMarks = 20;
if  (totalmMarks<40){
  console.log("you need to improve");
}else{
   console.log("you are good to go");
}

//ternary operator
//we can assign  a value to a variable
const result = totalmMarks<40?"you need to improve":"you are good to go";
console.log(result);

//ternary operator replacment of if,if else.if else if statement
const marks = 100;
const sresult = marks<40?"you need to improve":marks<60?"B grade":marks<75?"A grade":marks<85?"A+ grade":"you are good to go";
console.log(sresult);

//logical operators
//AND(&&),OR(||),NOR
//AND(&&) - all conditions must be true
const chemistry  = 80;
const physics = 70;
const maths = 60;
if(chemistry>70 && physics>60 && maths>50){
   console.log("you are eligible for engineering");
}else{
  console.log("you are not eligible for engineering");
}

//OR(||) - any one condition must be true
if(chemistry>70 || physics>60 || maths>50){
   console.log("you are eligible for engineering");
}else{
  console.log("you are not eligible for engineering");
}

//not(!) - it will reverse the condition
const isRaining = false;
if(!isRaining){
  console.log("you can go out");
}else{
  console.log("you can not go out");
}

const isStudentElegible = true;
if(!isStudentElegible){
  console.log("you are not eligible for the course");
}else {
  console.log("you are eligible for the course");
}

//logical operator with truhty and falsy values
//truthy values - true,1,"true","1","string",[],{},function(){}
//falsy values - false,0,"",null,undefined,NaN

//OR(||) - any one condition must be true
const firsName = "Prathima";
const nickName = "prathi";
const fullName = firsName || nickName;
console.log(`Name-${fullName}`);

const personName = "";
const nickName1 = "prathi";
const fullName1 = personName || nickName1;
console.log(`Name-${fullName1}`);

let k = 10;
let l;
console.log(k+l);//10+undefined=NaN
console.log(k||l);//10
console.log(l||k);//undefined||10=10
 console.log(k+(l||0));//10+0=10

//AND(&&) - all conditions must be true
const userName = "Prathima";
const nickName2 = "prathi";
const fullName2 = userName && nickName2;
console.log(`Name-${fullName2}`);

const userName1 = "";
const nickName3 = "prathi";
const fullName3 = userName1 && nickName3;
console.log(`Name-${fullName3}`);//empty string

const userName2 = "Prathima";
const nickName4 = "";
const fullName4 = userName2 && nickName4;
console.log(`Name-${fullName4}`);//empty string

//exercise of OR operator
const userName5 = null;
const nickName5 = "";
const fullName5 = userName5 || nickName5 || "Guest";//short  circuiting
console.log(`Name-${fullName5}`);//Guest

//whats the output of the following code
console.log(3||2||1)//3
console.log(""||0||2)//2
console.log(0||""||undefined)//undefined
console.log(0||""||2)//2
console.log(0||""||null)//null
console.log(0||""||NaN)//NaN
console.log(0||""||undefined||null||NaN)//NaN
console.log(0||""||undefined||null||NaN||"Prathima")//Prathima

//exercise of AND operator
console.log(3&&2&&1)//1
console.log(""&&0&&2)//empty string
console.log(0&&""&&undefined)//0
console.log(0&&""&&2)//0
console.log(0&&""&&null)//0
console.log(0&&""&&NaN)//0
console.log(0&&""&&undefined&&null&&NaN)//0
console.log(0&&""&&undefined&&null&&NaN&&"Prathima")//0


//Nullish coalescing operator
//Nullish coalescing operator(??) - it will return the first defined value
//Nullish values - null,undefined
let uname="";
console.log(uname??"Guest");//empty string

const a1=0;
console.log(a1??=1);//0
console.log(a1??=10);//0
console.log(a1||100);//100

let aa=12;
let bb;
console.log(aa+(bb??0));//12