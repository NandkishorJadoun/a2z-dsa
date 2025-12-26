// Insertion sort
// Take an element & place it in its correct order

// Input = [25, 87, 65, 15, 22];
// Output = [15, 22, 25, 65, 87];

// TC = o(n^2)

function main(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  console.log(arr);
}

main([25, 87, 65, 15, 22]);
