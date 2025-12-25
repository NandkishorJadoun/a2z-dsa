// using digit extraction method
// TC = O(log10 (n))

const main1 = (n) => {
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }

  console.log(count);
};

// using base 10 logarithm
// TC = O(1)

const main2 = (n) => {
  console.log(Math.log10(n) + 1);
};

main2(10000);
