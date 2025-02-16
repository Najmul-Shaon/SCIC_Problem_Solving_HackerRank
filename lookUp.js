const number = 2;
const obj = {
  name1: 1,
  name2: 2,
};

const lookUp = "name2";

const check = Object.keys(obj).includes(lookUp);

// const check = keys;

if (check) {
  console.log(obj[lookUp]);
}
else{console.log("Not Found");}

console.log(check);
