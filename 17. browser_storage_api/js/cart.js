const productElm = document.getElementById("product");
const quantityElm = document.getElementById("quantity");
const productContainer = document.getElementById("product__container");

const handleAddProduct = () => {
  const product = productElm.value;
  const quantity = parseInt(quantityElm.value);
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
  let cart = {};
  const cartJSON = localStorage.getItem("cart");

  if (cartJSON) {
    cart = JSON.parse(cartJSON);
  }

  return cart;
};

const addPoductToCart = (product, quantity) => {
  const cart = getCart();

  if (cart[product]) {
    cart[product] = cart[product] + quantity;
  } else {
    cart[product] = quantity;
  }

  console.log("cart", cart);
  const cartJSON = JSON.stringify(cart);
  localStorage.setItem("cart", cartJSON);
};

const displayStoredProduct = () => {
  const cart = getCart();
  for (const product in cart) {
    const quantity = cart[product];
    console.log(product, quantity);
    displayProduct(product, quantity);
  }
};
displayStoredProduct();
