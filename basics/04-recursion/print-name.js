function main(str, count, N) {
  if (count === N) return;

  console.log(str);
  main(str, count + 1, N);
}

main("hello world", 0, 5);
