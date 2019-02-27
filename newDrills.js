'use strict';

function urlify(str) {
  const replacer = '%20';
  const string = str.split('');

  for(let i=0; i<=string.length; i++) {
    if (string[i] === ' ') {
      string[i] = replacer;
    }
  }

  return string.join('');
}

// Runtime Complexity = O(n)
// No optimization needed

// console.log(urlify('tester tester'));
// console.log(urlify('www.thinkful.com /tauh ida parv een'));

function filter(arr) {
  let newArr = [];
  for(let i=0; i<=arr.length; i++) {
    if (arr[i] >= 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// console.log(filter([1, 2, 3, 4, 5, 6, 7]));

// Runtime Complexity = O(n)
// No optimization needed

function maxSum(arr) {
  let counter=0;
  let sumArray = [];

  for (let i=0; i<arr.length; i++) {
    counter += arr[i];
    sumArray.push(counter);
  }
  return Math.max(...sumArray);
}

console.log(maxSum([1, -2, 3, 4, -5, 6, 7]));

// Runtime Complexity = 
// 