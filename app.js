const http = require("http");

const adminRoute = require("./routes/admin");

const shopRoute = require("./routes/shop");

const pageNotFoundRoute = require("./routes/pageNotFound");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoute);

app.use(shopRoute);

app.use(pageNotFoundRoute);

app.listen(3003);
