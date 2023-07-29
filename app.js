const path = require("path");

const adminRoute = require("./routes/admin");

const shopRoute = require("./routes/shop");

const pageNotFoundRoute = require("./routes/pageNotFound");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.set("views", "views");

const db = require("./util/database");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoute);

app.use("/admin", shopRoute);

app.use(pageNotFoundRoute);

app.listen(3003);
