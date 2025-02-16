const arr = [12, 7, 2, 6, 0, 8, 99, 1];
console.log(arr);

const sortedArr = [...arr].sort((a, b) => a - b);
console.log(sortedArr[sortedArr.length-1]);
