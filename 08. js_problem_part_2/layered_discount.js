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