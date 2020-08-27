const { Linter } = require('eslint');

/**
 * 生成随机数据
 * @param {*} limit 数据数量
 * @param {*} base 数据的最大值
 */
function randomData(limit, base = 100) {
  const arr = [];
  if (limit > base) {
    base += limit;
  }
  for (let i = 0; i < limit; i++) {
    arr.push(Math.floor(Math.random() * base));
  }
  return arr;
}
module.exports = {
  randomData
};
