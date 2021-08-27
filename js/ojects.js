let radius = 1;
let x = 1;
let y = 1;

///this is  factory function
function creatCircle(radius) {
    return {
        radius,
        x: 2,
        y: 2,
        location: {
            x: 1,
            y: 1
        },
        isVisible: true,
        draw() {
            console.log('circle');
        }

    };/* or
function creatCircle(radius){
    let circle = {
        radius: rad,
        location: {
            x: 2,
            y: 2
        }
        isVisible: true,
        draw: function
    }
}
    */

}

let circle1 = creatCircle(3, 'hello');
console.log(circle1);
let circle2 = creatCircle(5);
console.log(circle2);



//////////////////this is constructor function:
/*
function Circle(radius) {
    this.radius = radius;
    this.num = 1;
    this.move = function () {
        console.log('helle circle');
    }
    this.draw = function () {
        console.log('draw the circle');
    }
    this.test = function () { console.log('test'); }
}

const circle5 = new Circle(25);
circle5.color = 'green'; this line is added new properity
circle5.move = function (){console.log('hello')}
circle5.num = 5;
delete circle5.test;
console.log(circle5);*/

function creatCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('doira');
        }
    }
}

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('doira');
    }
}
const circle = new Circle(1);
//or
Circle.call({},1);

///function is object
console.log(Circle.name, Circle.length, Circle.constructor);

