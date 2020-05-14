//Arithmetic
//assignment
//Ternary
//comparison
//logical
//binary

//Arithmetic:
let x = 20;
let y = 10;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(y / x);
console.log(2 ** 3); // 2 raise to 3

//++ and --
let p = 1 ;
let q = p++;
console.log(p); //2
console.log(q); //1

let p1 = 1;
let q1 = ++p1;
console.log(p1) //2
console.log(q1) //2

let m = 2;
console.log(m--); //2
console.log(m); //1

//assigment
let x = 10;
let c = x + 10;
console.log(x+c);

//x = x * 10;
x*= 10;
console.log(x)

let j = 5;
j+= 5;
console.log(j);

//comparison
let x = 10;
console.log(x > 10);
console.log(x >= 10);
console.log(x===10); 
//strict equality - type and value will be checked
console.log(1===1);

//loose equality - value
console.log('1' == 1);
console.log(1 == 1);
console.log(true == 1);

//Ternary
let points = 110;
let type = points > 100 ? 'gold' : 'silver'; //condition true = gold, and false = silver
console.log(type);

//logical
//AND (&&)
let highincome = true;
let goodcreditcardscore = true;
let elgibleForLoan = highincome && goodcreditcardscore;
console.log(elgibleForLoan) // true

//true && true = true
//true && false = false
//false && true = false
//false && false = false

//OR
//true || true = true
//true || false = true
//false || true = true
//false || false = false

//NOT (!)
let isActive = true;
console.log(!isActive);
console.log(!(10<5));

//logical operators with non boolean:
//falsy(false);
//undefined
//null
//0
//false
//''
//NaN

//truthy values : which are not falsy
console.log(false ||'anand'); //anand
console.log(false || 1 || 2); //1 
console.log(true || 1 || 2); //true
console.log(false || undefined); //undefined
console.log(true || null); //true

//real time ex
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);

//bitwise operator - not used practically
//1 = 00000001
//2 = 00000010
//3 = 00000011
//3 = 00000000
console.log(1 | 2); //3 -- |
console.log(1 & 2); //0 -- &

//Operator precedence
console.log(2+3*4);
console.log((2+3)*4);

//swap two values:
let a = 10;
let b = 20;
let c = a; //10
    a = b; //20
    b = c; //10
console.log("a --> "+a); //20
console.log("b --> "+b); //10


