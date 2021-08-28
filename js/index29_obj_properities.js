//object properity
const circle = {
    radius: 1,
    draw(){
        console.log('doira');
    }
};
for(let key in circle){
    console.log(key, circle[key]);//agar con.logda key ni ozi yozilsa unda objectni properitylari terminalga chiqadi 
    //agarda key dan keyin , qoyib circle[key] deyilsa objectning qiymat(value) siham chiqariladi.

}
//for of loopi faqatgina iterable bolganlar un ishlatiladi masalan Array va Map for of ni object un ishlatib bomidi
//Agarda for of loopini ishlatib Objectni properitylari bn yurmoqchi bolinsa un shunday yoziladi:
//Agarda for of loopini ishlatib Objectni value va properitylari bn birga chiqarish un 
for(let entry of Object.entries(circle)){
    console.log('Entry: ',entry);//deyiladi
}
for(let key of Object.keys(circle)){
    console.log(key);
}
///Agarda Objectda biror properity borligini tekshirish un IN operatoridan foydalaniladi.
if('move' in circle){
    console.log('existent');
}else{
    console.log('this properity doesn\'t existent!!');
}