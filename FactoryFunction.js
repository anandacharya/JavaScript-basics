//factory funtion : it produces objects
//Name: camel case : oneTwoThreeFour
function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw');
        }
    }
    return circle;
}

const c1 = createCircle(1);
console.log(c1.radius);
c1.draw();

const c2 = createCircle(5);
console.log(c2.radius);
console.log(c2);

//Contructor Function: also used to create objects
//Name: pascal notation : OneTwoThreeFour

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw', radius);
    }
}
// how to call constructor function: use new keyword for memory allocation
const a = new Circle(1);
console.log(a);
console.log(a.radius)
a.draw();
