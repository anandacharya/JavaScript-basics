//for / while / do-while / for ... in / for...of
//infinite loop

for (i=0; i<=10; i++){
    console.log(i);
        if(i % 2 === 0)
            console.log('hi this is java script');
}
console.log('----------------')
//while:
let i = 1;
while (i<=10){
    console.log(i);
    i++;
}
console.log('----------------')
//do -while
let p = 1;
do {
    console.log(p);
    p++;
}
while(p<=10);
console.log('----------------')

//for - in:
//for objects

const persons = {
    name: 'Naveen',
    age: 25
};

for (let key in persons)
    console.log(key, persons[key]);

//Array:
const colors = ['red', 'green', 'blue']
for(let index in colors)
    console.log(index, colors[index]);

//for - of
//is used to get values from Array
for (let col of colors)
console.log(col);

//break and continue
let k = 0;
while (k <=10) {
    if(k === 5)
        break;
    console.log(k);
    k++;
}