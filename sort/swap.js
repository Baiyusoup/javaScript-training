module.exports = {
  /**
   * 交换元素
   * @param {*} arr 数组
   * @param {*} i 元素index
   * @param {*} j 元素index
   */
  swap: function(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
};
