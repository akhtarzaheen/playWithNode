let products = [];

exports.addProduct = (title) => {
  products.push({ product: title });
};

exports.getProduct = () => {
  return products;
};
