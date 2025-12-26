// Bubble sort
// Push the max to last by adjacent swaps

// Input = [25, 87, 65, 15, 22];
// Output = [15, 22, 25, 65, 87];

// TC = o(n^2)

function main(arr) {
  for (let i = arr.length - 1; i >= 1; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(arr);
}

main([25, 87, 65, 15, 22]);
