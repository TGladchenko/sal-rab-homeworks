function calcShipping(sum, min, shipping) {
    let productsSum = sum;
    let freeShippingMinSum = min;
    let shippingPrice = shipping;
  
    let shippingSum = 0;
  
    if (productsSum === 0) {
      shippingSum = 0;
    } else if (productsSum >= freeShippingMinSum) {
      shippingSum = 0;
    } else if (productsSum > 0 && productsSum < freeShippingMinSum) {
      shippingSum = shippingPrice;
    }
  
    return shippingSum;
  }
  
  function calcDiscount(sum, min, discount) {
    let productsSum = sum;
    let discountMinSum = min;
    let discountPart = discount;
  
    let discountSum = 0;
  
    if (productsSum >= discountMinSum) {
      discountSum = productsSum * (discountPart / 100);
    } else {
      discountSum = 0;
    }
  
    return discountSum;
  }
  
  function calcInvoice({
    sum,
    discountMinSum,
    discountPart,
    shippingFreeMinSum,
    shippingPrice,
  }) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);
  
    let totalSum = productsSum - discountSum;
  
    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice);
  
    let freeShipping = shippingSum === 0;
  
    let invoice = {
      discount: discountSum,
      freeShipping: freeShipping,
      shipping: shippingSum,
      total: totalSum + shippingSum,
    };
  
    return invoice;
  }
