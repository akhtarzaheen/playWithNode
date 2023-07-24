const express = require("express");

const adminController = require("../controller/adminController");

const router = express.Router();

router.get("/add-product", adminController.getAddProduct);
router.post("/product", adminController.getProduct);

module.exports = router;
