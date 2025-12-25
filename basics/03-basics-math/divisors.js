/* 
Input: N = 36
Output: [1, 2, 3, 4, 6, 9, 12, 18, 36]  
 */

// Brute force

function main1(num) {
  const resArr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      resArr.push(i);
    }
  }
  console.log(resArr);
}

// Optimal Way

function main2(num) {
  const resArr = [];

  /* TC of this loop = O(sqrt(n)) */

  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      resArr.push(i);
      if (i !== num / i) {
        resArr.push(num / i);
      }
    }
  }

  console.log(resArr.sort((x, y) => x - y));
}

main2(18);
