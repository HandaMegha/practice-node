function add(a, b) {
  return a + b;
}

// function subtract(a, b) {
//   return a - b;
// }

//To export single module:
module.exports = add;

//To export multiple modules & module.exports can be used only once in a single file:
// module.exports = {
//   add,
//   subtract,
// };

//Or we can create anoymous functions & exports can be used multiple in a single file:
// exports.add = (a, b) =>  a + b;
// exports.subtract = (a, b) =>  a - b;
