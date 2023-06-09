const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("first middleware");
  next();
});

app.use((req, res, next) => {
  console.log("second middleware", req.url, req.method);
});

const server = http.createServer(app);

server.listen(3003);
