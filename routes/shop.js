const express = require("express");

const router = express.Router();

router.get("/product", (req, res, next) => {
  // res.send(`<h1>Shop</h1>`);
  res.render("shop", {
    pageTitle: "Products List",
    products: "",
    path: "/product",
  });
});

module.exports = router;
