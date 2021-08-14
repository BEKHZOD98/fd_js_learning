function sum(limit) {
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
console.log(sum(55));