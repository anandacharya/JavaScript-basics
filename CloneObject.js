//Cloning objects:
const circle = {
    radius : 1,
    draw(){
        console.log('draw');
    }
}

//1. for - in loop
const another = {};
for(let key in circle)
another[key] = circle[key];
console.log(another);

//2. Using Object.assign method
const another1 = Object.assign({}, circle);
console.log(another1);

const another2 = Object.assign({
    color: 'red'}, circle);
console.log(another2);
another2.draw();

// 3. using spread ...operator
const another3 = { ...circle}
console.log(another3);
another3.draw();