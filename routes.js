const fs = require("fs");
const routeHandler = (req, res) => {
  if (req.url === "/") {
    res.write("<html>");
    res.write(
      "<body><form action='/message' method='post'><input type='text' name='message'/><button>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (req.url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      fs.writeFile("message.txt", parseBody.split("=")[1], (err) => {
        res.setHeader("Location", "/");
        res.statusCode = 302;
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first Node Project!</title></head>");
  res.write("<body><h1>First Node Project Html!</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = routeHandler;
