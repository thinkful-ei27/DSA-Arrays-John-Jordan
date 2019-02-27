'use strict';

const ourArray = require('./arrays');
const arr = new ourArray();
function main() {
  ourArray.SIZE_RATIO = 3;

  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();
  arr.pop();
  arr.pop();
  arr.pop();
  arr.push('tauhida');
  console.log(arr.get(0));
}
main();