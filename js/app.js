function greeting (name){
    console.log('salom ' + name);

}
greeting('malik');
function multi(num){
    console.log(num*num);
}
multi(2);
function multi2(num){
   return num*num;
}
function multi3(num){
    return console.log(num*num);
}
console.log(multi2(5));
multi3(7);