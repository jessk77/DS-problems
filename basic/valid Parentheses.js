// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// 1.Open brackets must be closed by the same type of brackets.
// 2.Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([)]"
// Output: false

// Example 5:
// Input: s = "{[]}"
// Output: true

var isValid = (s) => {

  const openBrackets = ["(", "[", "{"];
  const closeBrackets = [")", "]", "}"];

  if (!openBrackets.includes(s[0]) || s.length % 2 !== 0) return false;

  let lastsOpen = [s[0]];
  let i = 1;
  while (i < s.length) {
    if (openBrackets.includes(s[i])) {
      lastsOpen.push(s[i]);
    } else {
      if (closeBrackets.includes(s[i])) {
        if (
          closeBrackets.indexOf(s[i]) !== openBrackets.indexOf(lastsOpen.pop())
        )
          return false;
      } else {
        return false; //invalid
      }
    }
    i++;
  }

  if (lastsOpen.length > 0) return false;
  return true;
};

console.log(isValid("[()]"));
