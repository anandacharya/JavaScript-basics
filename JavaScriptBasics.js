//data types
//1. primitive data types
//String
//Number
//Boolean
//Undefined
//Null
let name = 'Anand';
let age = 25;
let color = 'red';
console.log(name + '' + age);
console.log(2+2);

let range=4;
range=5;
console.log(range);

const numberOfdays = 7; //value cannot be changed

let s1 = 'Hello World';
let num = 30;
let flag = true;
let isActive = false;
let price;
let model = null;
let wheels = undefined;

//dynamlic typing
let d = 'anand';
d = 30;

//2. Reference types data types
// objects
// arrays
// functions

// Objects:
let user = {
    name: "Tom",
    age: 30
};
console.log(user)
//1. use dot notation
console.log(user.name);
console.log(user.age);
user.age = 35;
console.log(user.age);
console.log(user.name + ' ' + user.age);

//2. using bracket notation
user['name']='Mary';
console.log(user.name);

// Arrays:
// list of objects
let language = ['java','javascript'];
console.log(language);
console.log(language.length);
language[2] = 'Ruby';
console.log(language);
console.log(language.length);
console.log(language[0]);

//Functions:
function getName(){ //0 param
    console.log('this is my function !');
} //we dont write semicolon in function

//call the function
getName();

//parameter based function
function greet(name, age){
    console.log('hello '+name + ' ' +age);
}
greet('Anand', 35);
greet('automation'); //undefined
greet();

//return from function
function add(num1, num2){
    return num1 + num2;
}
let sum = add(10,20);
console.log(sum);
console.log(add(40,50));

function squareRoot(number){
    let root = number * number;
    return root;
}

console.log(squareRoot(5));
console.log(squareRoot(12));
