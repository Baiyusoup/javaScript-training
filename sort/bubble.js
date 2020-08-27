/**
 * 冒泡排序
 * 升序冒泡
 * 每一次冒泡操作，未排序区间中的最大值（最小值）就会冒泡到数组的末端
 * 那么每次冒泡，就不需要再去比较那些已经排序过的元素了 len - i - 1
*/
const { randomData } = require('./randomData.js');
const { swap } = require('./swap.js');

const data = randomData(10);
/**
 * 冒泡排序
 * @param {*} arr
 */
function bubbleSort(arr = []) {
  const len = arr.length;
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len - i - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

/**
 * 改进版
 * @param {*} arr
 */
function bubbleSort1(arr = []) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let flag = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        flag = true;
      }
    }
    if (!flag) break;
  }
}
bubbleSort1(data);
console.log(...data);
