// Input: N = 12345
// Output:54321

function main(x) {
  const isNegative = x < 0;
  x = isNegative ? -x : x;

  let result = 0;

  while (x > 0) {
    let remainder = x % 10;

    result = result * 10 + remainder;

    x = Math.floor(x / 10);
  }

  return isNegative ? -result : result;
}

main(-765);
