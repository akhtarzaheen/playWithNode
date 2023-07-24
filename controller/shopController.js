const productModel = require("../models/product");

exports.showProducts = (req, res, next) => {
  const products = productModel.getProduct();
  res.render("shop", {
    pageTitle: "Products List",
    products: products,
    path: "/product",
  });
};
