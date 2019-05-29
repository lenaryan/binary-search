let arr = [1, 3, 5, 7, 8, 9, 15, 30, 34, 55];
let num = 30;

function binSearch(arr, num, leftIndex, rightIndex) {
  let midIndex = 0;
  if (arr[leftIndex] == num) {
    console.log('leftElem = num = ' + num);
    return leftIndex;
  }
  if (arr[rightIndex] == num) {
    console.log('rightElem = num = ' + num);
    return rightIndex;
  }
  while (leftIndex < rightIndex - 1) {
    midIndex = Math.floor((rightIndex + leftIndex) / 2);
    if (arr[midIndex] == num) {
      console.log('midElem = num = ' + num);
      return midIndex;
    }
    if (arr[midIndex] > num) {
      rightIndex = midIndex;
      console.log("rightIndex " + rightIndex);
    }
    else {
      leftIndex = midIndex;
      console.log("leftIndex " + leftIndex);
    }
  }
  return -1;
}

console.log(binSearch(arr, num, 0, arr.length - 1));