// <----------File handling in Node JS---------->

const fs = require("fs");

//Write File: This method replaces the specified file and content if it exists. If the file does not exist, a new file,
// containing the specified content, will be created.

//Synchronous Call which takes name of file, text inside the file (Blocking Request)
// fs.writeFileSync("./test.txt", "Hi! I am there");

//Asynchronous Call which takes name of file, text inside the file, callback function (Non-blocking Request)
// fs.writeFile("./test.txt", "Hi! I am there", (err) => {});

//Read File:

//Synchronous Call which takes name of file, encode text & it gives us back the result
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result); //Megha: +919876543210

//Asynchronous Call which takes name of file, encode text, callback function it gives us back the result/error inside the
// callback function
// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//   if (err) console.log(err);
//   else console.log(result); //Megha: +919876543210
// });

//Append File: It appends specified content to a file. If the file does not exist, the file will be created.

//Synchronous Call which takes name of file, text inside the file
// fs.appendFileSync("./test.txt", "I have appended the code");

//Asynchronous Call which takes name of file, text inside the file, callback function
// fs.appendFile("./test.txt", `\n I have appended the code`, (err) => {});

//Rename File -> The fs.rename() method renames the specified file.
// var fs = require('fs');

// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });

// -> The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is
// opened for writing. If the file does not exist, an empty file is created.
// var fs = require('fs');

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });

//Copy file we can use cpsync & to delete file we can use unlinksync & many more operations are there
