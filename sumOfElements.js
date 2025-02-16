// "use strict";

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//   inputString = inputString.split("\n");

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

// function main() {
//   const n = parseInt(readLine().trim(), 10);

//   const arr = readLine()
//     .replace(/\s+$/g, "")
//     .split(" ")
//     .map((arrTemp) => parseInt(arrTemp, 10));

// }

const number = 30;
// console.log(number);
const array = [];
let sum = 0;

for (let i = 0; i < number; i++) {
  array.push(i + 1);
    // console.log(array);
    // [1, 2, 3];
//   console.log(array[i]);
  sum += array[i];
}
console.log("the sum is", sum);
