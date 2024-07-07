//Node js has built in module called HTTP, which allows Node js to transfer data over HTTP(Hyper Text Transfer Protocol)
//The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client
// var http = require("http");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" }); //200 is status code & content type passed is response headers
//     res.write("Hello World!"); //Output shown in when localhost:8080 is opened
//     res.end();
//   })
//   .listen(8080);

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

/*Function in node js */
function Message(name){
    console.log(`Hello ${name}`);
}

Message("World");


/**Buffer data type */
let b = new Buffer(10000);
let str = "----------";

b.write(str);
console.log(str.length); // 10
console.log(b.length); // 10000

//The Node.js file system module allows you to work with the file system on your computer.

//Different methods of file:
//Read File -> The fs.readFile() method is used to read files on your computer
// var http = require("http");
// var fs = require("fs");
// http
//   .createServer(function (req, res) {
//     //Open a file on the server and return its content:
//     fs.readFile("demofile1.html", function (err, data) {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(8080);

//Create File -> The File System module has methods for creating new files

//-> The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created.
// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
  
// -> The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is 
// opened for writing. If the file does not exist, an empty file is created.
// var fs = require('fs');

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, 
// containing the specified content, will be created.
// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

//Update File -> The File System module has methods for updating files
//The fs.appendFile() method appends the specified content at the end of the specified file.
// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });

// The fs.writeFile() method replaces the specified file and content.
// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });

//Delete File -> The fs.unlink() method deletes the specified file.
// var fs = require('fs');

// fs.unlink('mynewfile2.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });

//Rename File -> The fs.rename() method renames the specified file.
// var fs = require('fs');

// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });