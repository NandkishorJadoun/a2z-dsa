/* Input:N = 4554
Output:Palindrome Number */

function main(x) {
  const og = x;
  let rev = 0;

  while (x > 0) {
    const digit = x % 10;
    x = Math.floor(x / 10);
    rev = rev * 10 + digit;
  }

  console.log(og === rev ? "Palindrome Number" : "Not Palindrome");
  return og === rev ? "Palindrome Number" : "Not Palindrome";
}

main(1210);
