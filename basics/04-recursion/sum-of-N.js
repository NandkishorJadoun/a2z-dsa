function main(N, sum = 0) {
  if (N === 0) {
    console.log(sum);
    return;
  }

  sum += N;
  main(N - 1, sum);
}

main(512);
