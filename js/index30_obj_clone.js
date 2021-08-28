const figure = {
    radius: 1,
    draw(){
        console.log('circle');
    }
};///birinchi usuli
const clone = {};
for (let key in figure){
    clone[key] = figure[key];
}//bunday objectdan clone olish usuli eskicha dir!!
console.log('cloned by for in loop',clone);
/////// ikkinchi usuli Overload qilish bunda Objectning assign methodini ishlatiladi va o'zgaruvchiga tenglashtirib olinadi

const cloneFigure = Object.assign({}, figure);//assign methodini ichida 1chi parametriga obj berishimiz kere {}, 2chi parametriga esa qaysi objectdan clone olin votgan bosa ushani ismi yoziladi
console.log('cloned by assign method: ',cloneFigure);
