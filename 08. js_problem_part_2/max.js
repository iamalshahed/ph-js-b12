let disha = 98;
let salman = 49;

if(disha > salman){
    console.log('disha strawberry paiche');
}else{
    console.log('salman strawberry paiche');
}

// using function
function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}
const max = getMax(25, 33);
console.log('max number of two is:', max);