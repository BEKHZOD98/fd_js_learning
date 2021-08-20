/*function sum(limit) {
    if (typeof limit !=='number') {
        return 'this is not number please typing only numbers!!';
    }
    let sum = 0;
    for (let i = 0; i <= limit; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            sum += i;
        }
    }
    return sum;
}
console.log(sum(55));*/
///////////show properties
/*
 let car = {
     moder: 'Toyota',
     make: 'Estima',
     year: 2016,
     price:5000
 }
 function showProperties(){
    for(const [key, value] of Object.entries(car)){
        if(typeof value === 'string'){
        console.log(`${key}: ${value}`);}
    }
 }
 showProperties(car);*/



/*const marks = [81, 74, 86, 59, 77];

console.log(calculateGrade(marks))
 
 
function calculateAverage(array){
   let sum = 0;
   for(let student_point of array){
         sum+=student_point;
         
   }
   let avarage = Math.floor(sum/5);
   
   return avarage;
}
function calculateGrade(marks){
    let avrg = calculateAverage(marks);
   if(avrg < 50) return 'F';
   if(avrg < 60) return 'D';
   if(avrg < 70) return 'C';
   if(avrg < 80) return 'B';
   return 'A';
 }*/
console.log(showPrimeNumbers(20));

function showPrimeNumbers(limit) {

    for (let num=2; num <=limit; num++) {
        let isPrime = true;
        for(let factor = 2; factor<num; factor++){
        if (num % factor === 0) {
            isPrime = false;
            break;
        }
        
    }
    if(isPrime) console.log(num);
    
}}










