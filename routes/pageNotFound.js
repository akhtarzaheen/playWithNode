const path = require("path");

const express = require("express");

const dirPath = require("../util/path");

const router = express.Router();

router.use((req, res, next) => {
  res.sendFile(path.join(dirPath, "views", "pageNotFound.html"));
});

module.exports = router;
