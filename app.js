const http = require("http");

const server = http.createServer((req, res) => {
  console.log(
    "url=>",
    req.url,
    "method=>",
    req.method,
    "header=>",
    req.headers
  );
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first Node Project!</title></head>");
  res.write("<body><h1>First Node Project Html!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3002);
