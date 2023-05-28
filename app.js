const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(
    "url=>",
    req.url,
    "method=>",
    req.method,
    "header=>",
    req.headers
  );
  if (req.url === "/") {
    res.write("<html>");
    res.write(
      "<body><form action='/message' method='post'><input type='text'/><button>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (req.url === "/message" && req.method === "POST") {
    fs.writeFileSync("message.txt", "Dummy");
    res.setHeader("Location", "/");
    res.statusCode = 302;
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first Node Project!</title></head>");
  res.write("<body><h1>First Node Project Html!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3002);
