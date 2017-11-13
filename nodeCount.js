require('./treeStructures');


function getLeafNodeCount(node) { // nodes with no children
  if (!node) return 0;
  if (node.left === null && node.right === null) return 1;
  return getLeafNodeCount(node.left) + getLeafNodeCount(node.right)
}
// console.log(getLeafNodeCount(binaryTreeExampleData)) // 4


function GetNodeCount(node) { // count all the nodes
  if (!node) return 0;
  return GetNodeCount(node.left) + GetNodeCount(node.right) + 1;
}

// console.log(GetNodeCount(binaryTreeExampleData)) // 9
