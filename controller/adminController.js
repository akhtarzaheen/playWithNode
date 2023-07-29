const { render } = require("ejs");
const productModel = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  res.render("admin", { pageTitle: "Add Products", path: "/addProduct" });
};

exports.addProdSave = async (req, res) => {
  console.log("inside add save");
  productModel
    .saveProducts(req.body)
    .then((resp) => {
      productModel
        .fetchall()
        .then((resp) => {
          res.render("shop", {
            pageTitle: "Products List",
            products: resp[0],
            path: "/product",
          });
        })
        .catch((err) => console.log(err));
    })

    .catch((err) => console.log(err));
};

exports.getProduct = async (req, res, next) => {
  console.log("inside get prod");
  const products = await productModel.fetchall();

  res.render("shop", {
    pageTitle: "Products List",
    products: products[0],
    path: "/product",
  });
};
