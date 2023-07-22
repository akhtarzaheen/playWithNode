const path = require("path");

const express = require("express");

const dirPath = require("../util/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(dirPath, "views", "admin.html"));
});

router.post("/product", (req, res, next) => {
  res.sendFile(path.join(dirPath, "views", "shop.html"));
});

module.exports = router;
