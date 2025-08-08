function add(price1, price2){
    const total = price1 + price2;
    return total;
}

const bill = add(25, 25);
console.log(bill);

function add2(price1, price2){
    return price1 + price2;
}

const bill2 = add2(2, 50);

console.log(bill, bill2);

// do some math
function doMath(inp1, inp2){
    const sum = inp1 + inp2;
    const diff = inp1 - inp2;
    const mult = sum * diff;
    const devide = mult / 2;
    return devide;
}
const output = doMath(2, 4);
console.log(output);