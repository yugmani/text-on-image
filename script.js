console.log('hello!');

function myFunction(input) {
  let maxNum = input[0];
  for (let i = 0; i < input.length; i++) {
    if (maxNum < input[i]) {
      maxNum = input[i];
    }
  }
  return maxNum;
}

console.log(myFunction([1, 2, 3]));
// myFunction([10, 1000, 100]);
// myFunction([-10, -2, -11]);
