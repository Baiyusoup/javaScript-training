/**
 * 选择排序
 * 每一次的都将未排序区中找出最大值（最小值）放到已排序的末尾
 * 时间复杂度O(n^2)
 * 空间复杂度O(1)
 * 不稳定排序
 * 在辅助内存有限情况下，优势比其他复杂排序大
 */
const { randomData } = require('./randomData.js');
const { swap } = require('./swap.js');
const data = randomData(10);

function selectSort(arr = []) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(arr, min, i);
    }
  }
}
selectSort(data);
console.log(...data);
