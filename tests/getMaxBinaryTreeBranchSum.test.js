const getMaxBinaryTreeBranchSum = require('../<getMaxBinary></getMaxBinary>TreeBranchSum').getMaxBinaryTreeBranchSum
const tree = require('../trees/treeBinary');

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