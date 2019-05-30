module.exports = (arr, num, leftIndex, rightIndex) => {
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