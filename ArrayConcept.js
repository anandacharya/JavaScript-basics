const num = [3,4];
console.log(num);
console.log(num.length);
console.log(num[0]);

//add more elements at end of array:
num.push(5,6);
console.log(num);

//add more elements at begining of array:
num.unshift(1,2);
console.log(num);

//add more elements at middle of array:
num.splice(2,0,'a','b');
console.log(num);

//how to print all values in an array
for(const key in num) {
    console.log(num[key]);
}
console.log('----------------------');

//find elements in array : (primitive):
const s = [1,2,3,4,1,2];
console.log(s.indexOf(1)); //0 //1st occurence of 1
console.log(s.indexOf(6)); //-1
console.log(s.indexOf('a')); //-1
console.log(s.indexOf(1, s.indexOf(1)+1)); //4 //2nd occurence of 1

console.log(s.indexOf(3)!==-1); //true
console.log(s.includes(3)); //true

//find elements in array : (ref type):
//Array can have objects...
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
];

//console.log(courses.includes( {id: 1, name: 'a'})); //false

const c3 = courses.find(course => course.name === 'a'); //lambda function

const c1 = courses.find(function(course){
    return course.name === 'a';
});
console.log(c1);
console.log(c1.id);
console.log(c1.name);

const c2 = courses.findIndex(function(course){
    return course.name === 'a';
});
console.log(c2);
console.log(c2.id);
console.log(c2.name);

////////////////////////////////////////////////////
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits);

fruits.push('cherry'); //to add element at end of array
console.log(fruits);

fruits.pop(); //to remove element at end of array
console.log(fruits);

fruits.shift(); //to remove element at begining of array
console.log(fruits);

fruits.unshift('lemon'); //to add eleemnt at start of array
console.log(fruits);

delete fruits[1] //delete element at index 1
console.log(fruits);

fruits[1] = 'apple';
console.log(fruits);

fruits.splice(1,2); //remove 2 elements from 1st index
console.log(fruits)

fruits.splice(2,0,'milk','bread') //add 2 emlements and not remove anything
console.log(fruits);

let citrusfruits = fruits.slice(0,2) //to create copy of array
console.log(fruits);
console.log(citrusfruits);

let evenNumbers = [2,4,6]
let oddNumbers = [1,3,5]
let primeNumbers = [5,7]
let numbers = evenNumbers.concat(oddNumbers, primeNumbers);
console.log(numbers);
