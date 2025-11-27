function pattern1(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}

function pattern2(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

function pattern3(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
}

function pattern4(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i;
    }
    console.log(row);
  }
}

function pattern5(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

function pattern6(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
}

function pattern7(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      row += "*";
    }
    for (let l = 0; l < n - i - 1; l++) {
      row += " ";
    }
    console.log(row);
  }
}

function pattern8(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += " ";
    }

    for (let k = 0; k < 2 * n - (2 * i + 1); k++) {
      row += "*";
    }

    for (let l = 0; l < i; l++) {
      row += " ";
    }

    console.log(row);
  }
}

function pattern9(n) {
  pattern7(n);
  pattern8(n);
}

function pattern10(n) {
  for (let i = 0; i < n - 1; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }

  console.log("*".repeat(n));

  for (let i = n - 1; i > 0; i--) {
    let row = "";
    for (let j = i; j > 0; j--) {
      row += "*";
    }
    console.log(row);
  }
}

function pattern11(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = n - i; j <= n; j++) {
      row += j % 2;
    }
    console.log(row);
  }
}

function pattern13(n) {
  let num = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += num + " ";
      num++;
    }
    console.log(row);
  }
}

function pattern14(n) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += alphabet[j];
    }
    console.log(row);
  }
}

function pattern15(n) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += alphabet[j];
    }
    console.log(row);
  }
}

function pattern16(n) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += alphabet[i];
    }
    console.log(row);
  }
}

function pattern18(n) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = n - 1 - i; j <= n - 1; j++) {
      row += alphabet[j];
    }
    console.log(row);
  }
}

function pattern19(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) row += "*";
    for (let k = 0; k < 2 * i; k++) row += " ";
    for (let l = 0; l < n - i; l++) row += "*";
    console.log(row);
  }

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) row += "*";
    for (let k = 0; k < 2 * n - 2 * i - 2; k++) row += " ";
    for (let l = 0; l <= i; l++) row += "*";
    console.log(row);
  }
}

function pattern20(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) row += "*";
    for (let k = 0; k < 2 * n - 2 * i; k++) row += " ";
    for (let l = 0; l < i; l++) row += "*";
    console.log(row);
  }

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) row += "*";
    for (let k = 0; k < 2 * i; k++) row += " ";
    for (let l = 0; l < n - i; l++) row += "*";
    console.log(row);
  }
}

function pattern21(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      const firstOrLastRow = i === 1 || i === n;
      const firstOrLastColumn = j === 1 || j === n;

      if (firstOrLastRow) {
        row += "*";
      } else {
        row += firstOrLastColumn ? "*" : " ";
      }
    }
    console.log(row);
  }
}

