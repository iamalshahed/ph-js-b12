const productElm = document.getElementById("product");
const quantityElm = document.getElementById("quantity");
const productContainer = document.getElementById("product__container");

const handleAddProduct = () => {
  const product = productElm.value;
  const quantity = quantityElm.value;
  // console.log("product added!", product, quantity);

  displayProduct(product, quantity);
  addPoductToCart(product, quantity);

  productElm.value = "";
  quantityElm.value = "";
};

const displayProduct = (product, quanttity) => {
  const li = document.createElement("li");
  li.innerText = `${product} : ${quanttity}`;
  productContainer.appendChild(li);
};

const getCart = () => {
  const cart = {};
  return cart;
};

const addPoductToCart = (product, quantity) => {
  const cart = getCart();
  cart[product] = quantity;
  console.log("cart", cart);
};
