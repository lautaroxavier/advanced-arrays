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

// LUCKY NUMBERS

function isLuckyNumber(matrix, row, col) {
  let elem = matrix[row][col];
  console.log(elem);
  // verifico que sea el minimo de la fila
  for (let j = 0; j < matrix[0].length; j++) {
    if (elem > matrix[row][j]) {
      return false;
    }
  }
  // verifico que sea el maximo de la columna
  for (let i = 0; i < matrix.length; i++) {
    if (elem < matrix[i][col]) {
      return false;
    }
  }
  return true;
}

function luckyNumbers(matrix) {
  let luckyNumbers = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (isLuckyNumber(matrix, i, j)) {
        luckyNumbers.push(matrix[i][j]);
      }
    }
  }
  return luckyNumbers;
}

matrixA = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(luckyNumbers(matrixA)); // [12]

matrixB = [
  [5, 10, 8, 6],
  [10, 2, 7, 9],
  [21, 15, 19, 10],
];

console.log(luckyNumbers(matrixB)); // [10]

// SPIRAL MATRIX

function recorrerFila(matrix, fila, inicio, fin) {
  let result = [];
  if (inicio < fin) {
    for (let i = inicio; i <= fin; i++) {
      result.push(matrix[fila][i]);
    }
  } else {
    for (let i = inicio; i >= fin; i--) {
      result.push(matrix[fila][i]);
    }
  }
  return result;
}

function recorrerCol(matrix, col, inicio, fin) {
  let result = [];
  if (inicio < fin) {
    for (let i = inicio; i <= fin; i++) {
      result.push(matrix[i][col]);
    }
  } else {
    for (let i = inicio; i >= fin; i--) {
      result.push(matrix[i][col]);
    }
  }
  return result;
}

function spiralOrder(matrix) {
  let spiralMatrix = [];
  let topRow = 0;
  let rightmostCol = matrix[0].length - 1;
  let bottomRow = matrix.length - 1;
  let leftmostCol = 0;
  while (topRow !== bottomRow && leftmostCol !== rightmostCol) {
    // recorrer la fila mas alta de izquierda a derecha
    let topRowElems = recorrerFila(matrix, topRow, leftmostCol, rightmostCol);
    spiralMatrix = spiralMatrix.concat(topRowElems);
    // aumentar la fila mas alta
    topRow++;
    // recorrer la ultima columna de arriba a abajo
    let rightmostColElems = recorrerCol(
      matrix,
      rightmostCol,
      topRow,
      bottomRow
    );
    spiralMatrix = spiralMatrix.concat(rightmostColElems);
    // decrementar la ultima columna
    rightmostCol--;
    // recorrer ultima fila de derecha a izquierda
    let bottomRowElems = recorrerFila(
      matrix,
      bottomRow,
      rightmostCol,
      leftmostCol
    );
    spiralMatrix = spiralMatrix.concat(bottomRowElems);
    // decrementar ultima fila
    bottomRow--;
    // recorrer primera columna de abajo hacia arriba
    let leftmostColElems = recorrerCol(matrix, leftmostCol, bottomRow, topRow);
    spiralMatrix = spiralMatrix.concat(leftmostColElems);
    // aumentar primera columna
    leftmostCol++;
  }
  if (topRow === bottomRow) {
    let fila = recorrerFila(matrix, topRow, leftmostCol, rightmostCol);
    spiralMatrix = spiralMatrix.concat(fila);
  } else {
    let col = recorrerCol(matrix, leftmostCol, topRow, bottomRow);
    spiralMatrix = spiralMatrix.concat(col);
  }
  return spiralMatrix;
}

// PYRAMID ARRAY

function pyramidArray(base) {
  let pyramid = [base];
  // mientras el primer elemento de la piramide tenga longitud mayor a 1
  while (pyramid[0].length > 1) {
    // tomar el primer elemento de la piramide
    let nextLevel = [];
    for (let i = 0; i < pyramid[0].length - 1; i++) {
      // sumar los elementos adyacentes dos a dos
      let sum = pyramid[0][i] + pyramid[0][i + 1];
      // poner los resultados en una nueva lista
      nextLevel.push(sum);
    }
    // agregar la lista como primer elemento de la piramide
    pyramid.unshift(nextLevel);
  }
  return pyramid;
}

let p1 = pyramidArray([2, 3, 7, 5, 9]);
console.log(p1);
// [
//   [ 85 ],
//   [ 37, 48 ],
//   [ 15, 22, 26 ],
//   [ 5, 10, 12, 14 ],
//   [ 2, 3, 7, 5, 9 ]
// ]

let p2 = pyramidArray([2, 2, 2, 2]);
console.log(p2);
// [
//   [ 16 ],
//   [ 8, 8 ],
//   [ 4, 4, 4 ],
//   [ 2, 2, 2, 2 ]
// ]

// PASCALS TRIANGLE

function pascalsTriangle(n) {
  let triangle = [[1]];
  for (let i = 1; i < n; i++) {
    let newLevel = [1];
    let lastLevel = triangle[triangle.length - 1];
    for (let i = 1; i < lastLevel.length; i++) {
      let elem = lastLevel[i - 1] + lastLevel[i];
      newLevel.push(elem);
    }
    newLevel.push(1);
    triangle.push(newLevel);
  }
  return triangle;
}
