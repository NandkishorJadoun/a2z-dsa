// TC = O(sqrt(n))

function main(num) {
  let counter = 0;
  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      counter++;
      if (i !== num / i) {
        counter++;
      }
    }
  }

  console.log(counter === 2);
}

main(1009);
