/**
 * 插入排序
 * 将数组中的元素分为两个区间：已排序和未排序
 * 取出未排序区间的第一个元素e 与已排序区间的元素逐一比较，直到遇到比e小的元素i
 * 则这个i元素的后一位就是元素e要插进来的位置
 */
const { randomData } = require('./randomData.js');

const data = randomData(10);

function insertSort(arr = []) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    // 未排序区间的第一个元素
    let e = arr[i];

    // 与已排序区间的元素进行比较
    let j = i - 1;
    for (; j >= 0; j--) {
      if (e < arr[j]) {
        // 遇到比e小的元素，将此位置后面的所有已排序元素后移一位
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    // 将元素e插入
    arr[j + 1] = e;
  }
}
insertSort(data);
console.log(...data);
