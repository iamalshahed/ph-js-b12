/**
 * first 100: ---> 100
 * 101 to 200: ---> 90
 * avobe 200 ---> 70
 */

function layeredDiscountedTotal(quantity) {
  const first100Price = 100;
  const second100Price = 200;
  const avobe200Price = 70;

  if (quantity <= 100) {
    const total = quantity * first100Price;
    return total;
  } else if (quantity <= 200) {
    const first100Price = 100 * first100Price;
    const remainingQuantity = quantity - 100;
    const remainingTotal = remainingQuantity * second100Price;
    const total = first100Price + remainingTotal;
    return total;
  }else{
    const first100Price = 100 * first100Price;
    const second100Price = 100 * second100Price;
    const remainingQuantity = quantity - 200;
    const remainingTotal = remainingQuantity + avobe200Price;
    const total = first100Price + second100Price + remainingTotal;
    return total;
  }
}

const result = layeredDiscountedTotal(20);
console.log(result);



// jihad kakar code
function layreDicountTotal(qaountity){
    const fristonePrice = 100; // 
    const secondOnePrice = 90;//
    const aboveOnePrice = 70;
    if(qaountity <= 100){
        const total = qaountity * fristonePrice;
        return total;
    }else if(qaountity <= 200){  
        const fristTotal = 100 * fristonePrice; // 100 taka  //100
        const remainnigQouantity = qaountity - 100; // - 100;
        const remainnigTotal = remainnigQouantity * secondOnePrice;  /// 90
        const total = fristTotal + remainnigTotal; /// total
        return total;
    }else{
        const first100Total = 100 * fristonePrice;
        const second100Total = 100 * secondOnePrice;
        const remainingQouantity = qaountity - 200;
        const remainniTotal = remainingQouantity * aboveOnePrice;
        const total = first100Total + second100Total + remainniTotal;
        return total;
    }
}


const mainResult = layreDicountTotal(201);
console.log(mainResult);