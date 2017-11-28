const getMaxBinaryTreeBranchSum = require('../getMinMaxBinaryTreeBranchSum').getMaxBinaryTreeBranchSum
const getMinBinaryTreeBranchSum = require('../getMinMaxBinaryTreeBranchSum').getMinBinaryTreeBranchSum
const tree = require('../treeExamples/exampleBinaryTree');

const binaryTree = {
  value: null,
  left: null,
  right: null
}

test('should return 22', () => {
  expect(getMaxBinaryTreeBranchSum(tree)).toEqual(22)
});

test('should return 0 for an empty tree', () => {
  expect(getMaxBinaryTreeBranchSum(binaryTree)).toEqual(0);
});

test('should return 10', () => {
  expect(getMinBinaryTreeBranchSum(tree)).toEqual(10)
});

test('should return 0 for an empty tree', () => {
  expect(getMinBinaryTreeBranchSum(binaryTree)).toEqual(0);
});