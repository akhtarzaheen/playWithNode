const express = require("express");

const shopController = require("../controller/shopController");

const router = express.Router();

router.get("/product", shopController.showProducts);

router.post("/productDetails/:id", shopController.getProd);

module.exports = router;
