 function getMaxBinaryTreeBranchSum(node) {
  if (!node) return 0;
  return node.value +
    Math.max(getMaxBinaryTreeBranchSum(node.left),
    getMaxBinaryTreeBranchSum(node.right))
}

module.exports.getMaxBinaryTreeBranchSum = getMaxBinaryTreeBranchSum;