const path = require("path");

const express = require("express");

const dirPath = require("../util/path");

const router = express.Router();

router.use((req, res, next) => {
  res.status(404).render("pageNotFound", { pageTitle: "Page Not Found" });
});

module.exports = router;
