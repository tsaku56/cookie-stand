// const is constant variable, let is not a constant variable 
// 
const  heading = document.getElementById("heading");

// console log is a method that outputs a message to the web console (highlight or in Inspect)
console.log(heading);

// variable assigned value in quote is string
const  myNam = "Ross";

// variable assigned value in number, no quotes
let myAgess = 40;

// variable assigned value is a boolean, true or false and in no quotes
let isAlive = true;

// variable assigned value is array, is a line of code that can consists a ine of string. [] Braces.
const myPets = ["Dog", "Cat", "Goldfish"]

// variable assigned value is an object, is a standalone entity, with properties and type. {} Braces.
const cup = {
    color: "Blue",
    design: "mosiac",
    madeOfChina: true,
    weightInGrams: 100,
}

// console.log is logging and working out the variable, arithmetic operator
// increment number++ or deincrement number--
// let x = 5 + 5;
// onsole.log (x);

// ensure each word is capital ie. myPetName, this is called camel case.

// can't add a number to a string. number and string will always be a string. Should be 10 but its actually 55.
let myHouseNum = "5" + 5;
console.log(myHouseNum);

// concantenation is adding strings together 
let myHouse = myNam + " is learning";
console.log(myHouse);

let myName = "Ross"
console.log(myName);

let myAge = 32
console.log(myAge);

// ${myName} It is an EL expression basically it outputs the value that result from evaluating the expression
const myNames = "Ross"
let myAges = 32
console.log(`My name is : ${myNames} and I am ${myAges} years old`);

// concantenation is strings added together to make this sentance for this example. we do this by using +
const myProfile = "Hello my name is " + myName + " and I am " + myAge + " years old"
console.log(myProfile);

//  telling console to log, the type of, asking what data type is this
let x = 5
const y = "5"
let myNumber = x + y
console.log(typeof myNumber)