// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    const data = JSON.parse(json);
    return data.products;
  }
  
  function renderProductsCards(json) {
    clearProducts();
    const products = parseProducts(json);
    const length = products.length;
    for (let i = 0; i < length; i++) {
      addProduct(products[i]);
    }
  }
  
  // Для работы функции renderProductsCards предполагается, что уже написаны функции clearProducts и addProduct.
  