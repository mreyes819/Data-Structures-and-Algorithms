require('./treeStructures');


function getLeafNodeCount(node) { // nodes with no children
  if (!node) return 0;
  if (node.left === null && node.right === null) return 1;
  return getLeafNodeCount(node.left) + getLeafNodeCount(node.right)
}
// console.log(getLeafNodeCount(binaryTreeExampleData)) // 4


function getNodeCount(node) { // count all the nodes
  if (!node) return 0;
  return getNodeCount(node.left) + getNodeCount(node.right) + 1;
}

module.exports.getLeafNodeCount = getLeafNodeCount;
module.exports.getNodeCount = getNodeCount;
// console.log(GetNodeCount(binaryTreeExampleData)) // 9
