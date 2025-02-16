const string = "hello";
// const revString = [];
// let finalString;
// for (let i = 0; i < string.length; i++) {
//   revString.unshift(string[i]);
//   console.log(string[i]);
// }

// const newRevString = revString.split(",");
// console.log(newRevString);
// for (let i = 0; i < revString.length; i++) {
//   finalString += revString[i];
// }

// const str = finalString.split("undefined");
// console.log(str[1]);

let reverse = "";

for (let i = string.length - 1; i >= 0; i--) {
  reverse += string[i];
}
console.log(reverse);
