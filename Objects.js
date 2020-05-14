//vars and functions can be defined in an Object
//key : value pair format
const circle = {
    radius : 1,
    isVisible : true,
    location : {
        x : 1,
        y : 2
    },

    draw : function(){
        console.log('draw');
    }
}
console.log(circle.radius);
console.log(circle);
