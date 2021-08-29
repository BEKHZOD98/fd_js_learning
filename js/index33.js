/*
This is object literary
let laptop = {
    name: 'Lenova',
    display: 'IPS',
    storage: 'SSD',
    cpu:{
        cpuBrand:'Intel',
        cpuCore:4
    },
    ram:16,
    powerOn: function(){
        console.log('Laptop');
    }
};
console.log(laptop);*/

// This function is factory function.
function lap(name,dis,storage,cBrand,cCore,ram){
    let laptop = {
        name: name,
        display: dis,
        storageType: storage,
        cpu:{
            cpuBrand:cBrand,
            cpuCore:cCore
        },
        laptopRam:ram,
        powerOn: function(){
            console.log('Laptop');
        }
    };
    
    return laptop;
    
}
let Lenova = lap('lenova','IPS','SSD','Intel',4,16);
console.log(Lenova);