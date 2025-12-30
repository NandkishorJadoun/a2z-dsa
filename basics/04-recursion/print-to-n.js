// Print 1 to N using recursion

function main1(count, N) {
  if (count > N) return;
  console.log(count);
  main1(count + 1, N);
}

// Print N to 1 using recursion

function main2(N) {
  if (N < 1) return;
  console.log(N);
  main2(N - 1);
}

main2(5)
