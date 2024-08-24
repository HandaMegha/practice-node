//Node js has built in module called HTTP, which allows Node js to transfer data over HTTP(Hyper Text Transfer Protocol)
//The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client
// <----------Basic http server---------->
const http = require("http");
const fs = require("fs");

// const myServer = http.createServer((req, res) => {
//   res.end("Hello from server");
// });

//Creating a log file and send data once log file is created
const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.url} New Req Received \n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end("Hello");
        break;
      default:
        res.end("404 Not Found");
    }
  });
});

myServer.listen(8080, () => "Server Started");
