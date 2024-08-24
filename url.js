var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" }); //200 is status code & content type passed is response headers
    res.write("Hello World!"); //Output shown in when localhost:8080 is opened
    res.end();
  })
  .listen(8080);

//The URL module splits up a web address into readable parts.
var url = require("url");
var adr = "http://localhost:8080/default.htm?year=2017&month=february";
//Parse the address:
var q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host); //localhost:8080
console.log(q.pathname); // /default.htm
console.log(q.search); //?year=2017&month=february

/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
console.log(qdata.month); //february
console.log(qdata.year); //2017
