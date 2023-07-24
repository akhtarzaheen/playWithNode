const productModel = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  res.render("admin", { pageTitle: "Add Products", path: "/addProduct" });
};
exports.getProduct = (req, res, next) => {
  productModel.addProduct(req.body.product);
  const products = productModel.getProduct();

  res.render("shop", {
    pageTitle: "Products List",
    products: products,
    path: "/product",
  });
};
