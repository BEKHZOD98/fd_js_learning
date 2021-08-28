//// Value and Reference type
let a = 5;
let b = a;
a = 10; 
console.log(a,b);///nu yerda sonni o'zgaruvchini ozida saqlidi objectda esa maxsus manzilda
//saqlanib object objectga tenglash tirilganida unda son saqlanib turgan manzil ko'rsatiladi

let x = {value: 10};
let y = x;
x.value = 20;
console.log(x,y);//saqlangan manzil korsatilgani un ikkala objni qiymati birxildir.
///primitive tipdagi o'zgaruvchidan nusxa olinganda ularni qiymatidan nusxa olinadi bunarsa by value deyiladi
//objectlardan nuxsa olinganida ularni korsatkichi yani xotirada saqlanib turgan manzilidan nusxa olinadi bu esa by reference deyiladi

let number = 1;
function increase(number){
    number++;
    console.log('inside: ',number);
}
increase(number);
console.log('outside: ',number);

let obj = {value: 3};
function object(obj){
    obj.value++;
    console.log('func value: ',obj.value);
}
object(obj);
console.log('outside variable value: ',obj);//bu yerda variablening manzili korsatilgani un ikkalasini ham qiymati birxil bolib chiqadi.




