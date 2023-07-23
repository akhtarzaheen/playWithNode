const path = require("path");

const express = require("express");

const dirPath = require("../util/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(dirPath, "views", "admin.html"));
  res.render("admin", { pageTitle: "Add Products", path: "/addProduct" });
});

let products = [];
router.post("/product", (req, res, next) => {
  // res.sendFile(path.join(dirPath, "views", "shop.html"));
  products = [];
  products.push(req.body);
  console.log("Products", products);
  res.render("shop", {
    pageTitle: "Products List",
    products: products,
    path: "/product",
  });
});

module.exports = router;
