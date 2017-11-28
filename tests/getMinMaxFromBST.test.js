const minMaxBST = require('../getMinMaxFromBST');
const tree = require('../treeExamples/exampleBinarySearchTree');


test('should return the minimum value in a binary search tree', () => {
  expect(minMaxBST.getMinValue(tree)).toEqual('a');
});

test('should return the maximum value of a binary search tree', () => {
  expect(minMaxBST.getMaxValue(tree)).toEqual('i');
});