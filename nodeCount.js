require('./treeStructures');

function getLeafNodeCount(node) {
  if (!node) {
    return 0;
  }
  if (node.left === null && node.right === null) {
    return 1;
  }
  return getLeafNodeCount(node.left) + getLeafNodeCount(node.right)
}

console.log(getLeafNodeCount(binaryTreeExampleData)) // 4
