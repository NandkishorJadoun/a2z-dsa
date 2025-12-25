/*
 Input: N1 = 9, N2 = 12
Output: 3 
*/

/* TC = o(min(x, y)); */

function main1(x, y) {
  let gcd = Math.min(x, y);

  for (let i = gcd; i > 0; i--) {
    if (x % i === 0 && y % i === 0) {
      gcd = i;
      break;
    }
  }
  console.log(gcd);
}

// using Euclidean Algorithm
// TC = o(log φ(Min(x,y)))

function main2(x, y) {
  while (x > 0 && y > 0) {
    x > y ? (x = x % y) : (y = y % x);
  }

  console.log(Math.max(x, y));
}

// Recursive solution

function main2(x, y) {
  if (x === 0 || y === 0) {
    const result = Math.max(x, y);
    console.log(result);
    return result;
  }

  const newY = Math.min(x, y);
  const newX = Math.max(x, y) % newY;

  main2(newX, newY);
}

main2(18, 51);
