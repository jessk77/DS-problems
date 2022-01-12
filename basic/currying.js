/// Can you write code for this function: sum(a)(b)(c)....( n)(). This should return the sum of a+b+c....+n.

const sum = (a) => (b) => b? sum(a+b) : a;

console.log(sum(1)(2)(3)(4)());