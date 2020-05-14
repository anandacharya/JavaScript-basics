//Enumerating properties of an object:
//get all the properties of an object:
//check a property in an object

const circle = {
    radius : 1,
    draw(){
        console.log('draw');
    }
};

//1. for - in loop
for(let key in circle)
    console.log(key, circle[key]);

console.log('-------------');

//2. using for - of loop
for(let key of Object.keys(circle)) //of is used generally for array. So for oject we use object.keys method
    console.log(key);

console.log('-------------');
for(let entry of Object.entries(circle))
    console.log(entry);
console.log('-------------');

//3. in Operator:
//check a property in an object
if('radius' in circle)
    console.log('Yes');

if('draw' in circle)
    console.log('Yes');
