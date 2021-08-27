function creatCircle(rad){
    let figure = {
        radius: rad,
        location: {
            x: 2,
            y: 1
        },
        isHidded: true,
        draw: function(){
            console.log('draw figure');
        },
        move: function(){
            console.log('move the figure');
        }
    }
    return figure;
}
let figure1 = creatCircle(1);
console.log(figure1);

function creatPerson(sx,name,studentS,major){
    return{
        name: name,//or only name
        personalData:{
            age:25,
            sx,
            major:major
        },
        studentStatus: studentS,
        message: function(){
            console.log('sangmyung');
        }
    }
}
let Person1 = creatPerson('Male','Bob','Bachelor Degree','Computer Science');
console.log(Person1);