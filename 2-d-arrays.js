// TWO DIMENSIONAL SUM

function twoDimensionalSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}

let arr1 = [[1, 3], [-4, 7, 10], [2]];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [[], [3, 1, 2]];
console.log(twoDimensionalSum(arr2)); // 6

// TWO DIMENSIONAL PRODUCT

function twoDimensionalProduct(array) {
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    let row = array[i];
    for (let j = 0; j < row.length; j++) {
      product *= row[j];
    }
  }
  return product;
}

let arr3 = [[6, 4], [5], [3, 1]];
console.log(twoDimensionalProduct(arr3)); // 360

let arr4 = [[11, 4], [2]];
console.log(twoDimensionalProduct(arr4)); // 88

// MAX IN MATRIX

function maxInMatrix(matrix) {
  let max;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > max || max === undefined) {
        max = matrix[i][j];
      }
    }
  }
  return max;
}

matrix = [
  [11, 2, -99],
  [20, 19, 10],
  [47, 72, 56],
];

console.log(maxInMatrix(matrix)); // 72

// MAX IN COLUMNS

function maxColumn(matrix) {
  let maxCol;
  let maxCols = [];
  for (let j = 0; j < matrix[0].length; j++) {
    maxCol = -Infinity;
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][j] > maxCol) {
        maxCol = matrix[i][j];
      }
    }
    maxCols.push(maxCol);
  }
  return maxCols;
}

matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(maxColumn(matrix)); // [12, 19, 21]

// ZIP

function zip(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let row = [];
    row.push(arr1[i]);
    row.push(arr2[i]);
    result.push(row);
  }
  return result;
}

console.log(zip([1, 2, 3, 4], ["eins", "zwei", "drei", "vier"]));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(["eins", "zwei", "drei"], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

console.log(zip(["alef", "bet"], ["alpha", "beta"]));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

// ZANY ZIP

function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}

function zanyZip(arr1, arr2) {
  let result = [];
  let maxLength = max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    let pair = [];
    if (i < arr1.length) {
      pair.push(arr1[i]);
    } else {
      pair.push(null);
    }
    if (i < arr2.length) {
      pair.push(arr2[i]);
    } else {
      pair.push(null);
    }
    result.push(pair);
  }
  return result;
}

console.log(zanyZip([1, 2], ["eins", "zwei", "drei", "vier"]));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ["eins", "zwei", "drei"]));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(["alef", "bet"], ["alpha", "beta"]));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

// MATRIX SUM

function matrixAddition(matrix1, matrix2) {
  let matrixSum = [];
  for (let i = 0; i < matrix1.length; i++) {
    let row = [];
    for (let j = 0; j < matrix1[0].length; j++) {
      let sum = matrix1[i][j] + matrix2[i][j];
      row.push(sum);
    }
    matrixSum.push(row);
  }
  return matrixSum;
}

let matrixA = [
  [2, 5],
  [4, 7],
];
let matrixB = [
  [9, 1],
  [3, 0],
];
let matrixC = [
  [-1, 0],
  [0, -1],
];
let matrixD = [
  [2, -5],
  [7, 10],
  [0, 1],
];
let matrixE = [
  [0, 0],
  [12, 4],
  [6, 3],
];

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14],
