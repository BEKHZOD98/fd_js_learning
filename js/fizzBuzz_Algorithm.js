function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return 'This variable is not number !';
    } if ((input % 3 === 0) && (input % 5 === 0)) {
        return 'fizzbuzz';
    }
    if (input % 3 === 0) {
        return 'fizz';
    } if (input % 5 === 0) {
        return 'buzz';
    }
    return input;
}

console.log(fizzBuzz(15));
//////////
const LIMIT_SPEED = 70;
const KM_PER_POINT = 5;
checkSpeed(150);
function checkSpeed(speed){
    if(speed <= LIMIT_SPEED){
        console.log('ok');
    }
    else{
        let points=Math.floor((speed-LIMIT_SPEED)/KM_PER_POINT);
        if(points >= 12){
            console.log('운정면허증 없어진다');
        }
    }
}