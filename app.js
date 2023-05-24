const http = require("http");

const server = http.createServer((req, res) => {
  console.log("req=>", req, "res=>", res);
});

server.listen(3001);
