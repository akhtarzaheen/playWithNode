const express = require("express");

const shopController = require("../controller/shopController");

const router = express.Router();

router.get("/product", shopController.showProducts);

module.exports = router;
