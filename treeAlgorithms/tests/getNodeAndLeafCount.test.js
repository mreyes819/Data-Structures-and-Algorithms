const binaryTree = require('../treeData/exampleBinaryTree');
const getLeafNodeCount = require('../getNodeAndLeafCount').getLeafNodeCount;
const getNodeCount = require('../getNodeAndLeafCount').getNodeCount;


test('Will accurately count the number of leaf nodes', () => {
  expect(getLeafNodeCount(binaryTree)).toBe(4);
});

test('Will accurately count the total number of nodes', () => {
  expect(getNodeCount(binaryTree)).toBe(9);
});