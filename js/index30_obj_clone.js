const figure = {
    radius: 1,
    draw(){
        console.log('circle');
    }
};///birinchi usuli
const person = {
    name:'Mark',age:18
}
const clone = {};
for (let key in figure){
    clone[key] = figure[key];
}//bunday objectdan clone olish usuli eskicha dir!!
console.log('cloned by for in loop',clone);
/////// ikkinchi usuli Overload qilish bunda Objectning assign methodini ishlatiladi va o'zgaruvchiga tenglashtirib olinadi

const cloneFigure = Object.assign({}, figure);//assign methodini ichida 1chi parametriga obj berishimiz kere {}, 2chi parametriga esa qaysi objectdan clone olin votgan bosa ushani ismi yoziladi
console.log('cloned by assign method: ',cloneFigure);
//bundan tashqadi Object.assign() methodida clone qilin votganida source sifatida birqancha object bersa boladi va target sifatida yangi properity ham qoshsa boladi
const cloneFigure1 = Object.assign({color:'white'},figure,person)

//Objectdan clone olish usulini yangi usuli
const cloneFigure2 = {...figure}//spread operatiridir ...
console.log('spread: ',cloneFigure2);