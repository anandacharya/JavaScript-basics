//getting random number between 2 nos
function getRandomArbitary(min, max){
    return Math.random() * (max-min) + min;
}

let x = getRandomArbitary(10, 1000);
console.log(x);
console.log(Math.floor(x)); //remove values after dot