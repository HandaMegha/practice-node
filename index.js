const http = require("http");
const express = require("express");
const math = require("./math");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello!!");
});

app.get("/about", (req, res) => {
  return res.send("About Page!!");
});

console.log(math.add(2, 2));
// const server = http.createServer(app);
// server.listen(8080)

//OR
app.listen(8080);
