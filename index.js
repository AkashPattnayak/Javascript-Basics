//variable name

// let name = 'Akash';
// console.log(name);

//rules for identifire

//cannot be a reserved keyword
//should be meaningful
//cannot start with a number (1name)
//cannot contain a space or hyphen(-)
//Are case -sensitive

// let firstName='Akash';
let lastName='das';

//constant

// let interesetRate = 0.3;
// interesetRate = 1;
// console.log(interesetRate);
//if you use constant variable then in js

//instead of use let use const
const interesetRate = 0.3;
interesetRate = 1;
console.log(interesetRate);

//in js there two types of value assign 
//1 is primitives/value types  2 is reference types
//the categories of primitives types is 
//1 is string,2 is number 3is boolean 4 is undefind 5is null
//lets look out each of these
let name ='rupesh';//String Literal
let age = 22;//number Literal
let isApproved = false;//boolean Literal
let firstName = undefined;
// let selectedColor = null;

// 2 is reference types
//2.1 is Object 2.2 is Array 2.3 is Function
//object
let person = {
    name: 'Akash',
    age:22
};

//Dot Natation
person.name = 'chintu';


//Bracket Notation
let selection = 'name';
person[selection] = 'rupesh';

console.log(person.name);

//arrays use
let selectedColors = ['red','blue'];
//array is a dynamic so we can add and modify
selectedColors[2]=1;
console.log(selectedColors);

//letteer we are discuss everything

//function
//performing a task
function greet(name,lastName){
    console.log('hello' + name + ' '+lastName);
}
greet('alla','nany');

//types of function
