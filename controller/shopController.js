const productModel = require("../models/product");

exports.showProducts = async (req, res, next) => {
  const products = await productModel.fetchall();
  console.log("Prod=>", products[0]);
  let prod = products[0];
  res.render("shop", {
    pageTitle: "Products List",
    products: prod,
    path: "/product",
  });
};

exports.getProd = async (req, res) => {
  console.log("inside geProd");

  const prod = await productModel.getProductById(req.params.id);
  console.log("ID Res=>", prod);
  res.render("shop", {
    pageTitle: "Products List",
    products: prod[0],
    path: "/product",
  });
};
