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
 showProperties(car);