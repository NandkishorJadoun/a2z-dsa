// Selection sort
// Select minimum and swap it

// Input = [25, 87, 65, 15, 22];
// Output = [15, 22, 25, 65, 87];

// TC = o(n^2)

function main(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minValueIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minValueIndex]) {
        minValueIndex = j;
      }
    }

    [arr[i], arr[minValueIndex]] = [arr[minValueIndex], arr[i]];
  }

  console.log(arr);
}

main([25, 87, 65, 15, 22]);
