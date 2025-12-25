/*
Input:N = 371                
Output: True
*/

function main(num) {
  const originalNum = num;
  let sum = 0;
  while (num > 0) {
    const digit = num % 10;
    sum += digit ** 3;
    num = Math.floor(num / 10);
  }

  console.log(originalNum === sum);
}

main(371);
