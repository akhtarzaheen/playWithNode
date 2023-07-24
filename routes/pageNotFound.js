const express = require("express");

const pageNotFoundController = require("../controller/pageNotFoundController");

const router = express.Router();

router.use(pageNotFoundController.get404Page);

module.exports = router;
