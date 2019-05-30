module.exports = (arr, num) => {
  /* На первой проверке можно было выбросить ошибку,
  *  подобную той, которая выходит на второй проверке
  */
  if (!Array.isArray(arr) || !Number.parseInt(num)) return -1;
  
  if (!arr.every(el => Number.parseInt(el))) {
    throw new TypeError('array should include numbers')
  }

  let leftIndex = arr[0];
  let rightIndex = arr.length - 1;
  let midIndex = 0;

  if (arr[leftIndex] == num) {
    return leftIndex;
  }
  if (arr[rightIndex] == num) {
    return rightIndex;
  }

  while (leftIndex < rightIndex - 1) {
    midIndex = Math.floor((rightIndex + leftIndex) / 2);
    if (arr[midIndex] == num) {
      return midIndex;
    }
    if (arr[midIndex] > num) {
      rightIndex = midIndex;
    }
    else {
      leftIndex = midIndex;
    }
  }
  
  return -1;
}