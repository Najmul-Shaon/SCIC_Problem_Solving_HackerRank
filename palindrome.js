const str = "madamm";
let revStr = "";

// make reverse of main string
for (let i = str.length - 1; i >= 0; i--) {
  revStr += str[i];
}

// compare between two string that is palindrome or not

if (str === revStr) {
  console.log("yes");
} else {
  console.log("no");
}

// for (let i = 0; i < str.length; i++) {
//   for (let j = 0; j < revStr.length; j++) {
//     console.log("inside rev", revStr[j]);
//   }
//   console.log("inside str", str[i]);
// }
// console.log(revStr);
