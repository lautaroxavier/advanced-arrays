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
