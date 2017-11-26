var binaryTreeExampleData = require('../trees/treeStructures').binaryTreeExampleData;

const getMin = require('../minMaxBST').getMinValue;
const getMax = require('../minMaxBST').getMaxValue;


test('Gets minimum value in a binary tree', () => {
  expect(getMin(binaryTreeExampleData)).toBe('a');
});

test('Gets maximum value in a binary tree', () => {
  expect(getMax(binaryTreeExampleData)).toBe('i');
});
