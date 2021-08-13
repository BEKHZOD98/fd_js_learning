/*const { Min } = require("@tensorflow/tfjs");

let student={
     name :'akhmedov',
     age :16,
     gender :'male',
     result :50
     
 }
 let cons = student.result > 70 ? 'Imtixondan O`tdi':' Imtixondan Yiqildi';
 console.log(student,cons);
 function car(name,speed){
     return name + speed;
 }
 console.log(car('ferrari',320));
 x = 5;
 console.log('2'=='2');
 ///////////////////////////
 let date = new Date();
 let hour = date.getHours();
 let min = date.getMinutes();
 console.log('Hours: ' ,hour, ', Minutes ' ,min);
 let isOfficeOpen = (hour>=9 && min>=0);
 console.log(isOfficeOpen);
 ///////
 let defaultColor = 'qora';
 let userColor = 'siyoh rang';
 let currentColor = userColor || defaultColor;
 console.log(currentColor);
 ////////////////////
 let person = {
     name: 'Sobir',
     age: 36,
     job: 'uchuvchi'
 }
 console.log(person.job || 'ishsiz');
 ////practice
 let firstColor = 'white';
 let secondColor = 'black';
 let temp = undefined;
//  firstColor = temp;
//  temp = secondColor;
temp = firstColor;
firstColor = secondColor;
secondColor = temp;
 console.log(firstColor);
 console.log(secondColor);
 /////Array Arguments
 function sum(){
     let result = 0;
     for(const n of arguments){
         result +=n;
         console.log(result);
     }
 }
 sum(5,5);*/
 ///
 for(let i = 0; i<=5; i++){
     if(i%2 !==0){
         console.log(i);
     }
 }
 /////for in
 const person = {
     name: 'kamol',
     age:37
 }
 for(let key in person){
    // console.log(key); ////bu yerda person obyektini xossa nomlari chiqdi
     console.log(key,person[key])//bu yerso person obyektini value sini chiqarishda ishlatiladi.
    }
let colorsArray = ['white','black','green'];
for(let index in colorsArray){
    console.log(colorsArray[index]);
}

