
// Given a signed 32-bit integer x, return x with its digits reversed. 
//If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0
 
// Constraints:

// -231 <= x <= 231 - 1

var reverse = (x) => {
  const number = x.toString();
  const sign = x >= 0 ? 1 : -1;
  let reverseStack = [];
  for (let i = number.length - 1; i >= 0; i--) {
    reverseStack.push(number[i]);
  }
  let reverseNumber = parseInt(reverseStack.join('')) * sign;
  if ((Math.pow(-2, 31) <= reverseNumber) && ( reverseNumber <= Math.pow(2, 31) - 1))
    return reverseNumber;
  else return 0;
};

console.log("reversed number: ", reverse(0));
