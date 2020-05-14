let num = [1,2,3,4];
let another = num;

//1. blank array:
num = [];
console.log(num); //[]
console.log(another); //[1,2,3,4]
//OR
//2. using length // better approach
num.length = 0;
console.log(num);
//OR
//3. using splice method
num.splice(0, num.length);
console.log(num);
//OR
//4. using pop method
while(num.length>0)
num.pop();
console.log(num);

//End
const last = num.pop();
console.log(num);
console.log(last);

//begining
const first = num.shift();
console.log(num);
console.log(first);

//middle
//num.splice(2, 1); //remove 3 number
num.splice(2); //remove all number after 2nd index
console.log(num);

