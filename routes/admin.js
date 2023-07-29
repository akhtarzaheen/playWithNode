const express = require("express");

const adminController = require("../controller/adminController");

const router = express.Router();

// router.post("/product", adminController.getProduct);
router.get("/add-product", adminController.getAddProduct);
router.post("/productSave", adminController.addProdSave);

module.exports = router;
