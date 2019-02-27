const ourArray = require('./arrays');
const arr = new ourArray();
function main() {
  ourArray.SIZE_RATIO = 3;

  arr.push(3);
  console.log(arr);
}
main();