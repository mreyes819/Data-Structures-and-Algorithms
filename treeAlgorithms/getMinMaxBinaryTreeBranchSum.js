function getMaxBinaryTreeBranchSum(node) {
  if (!node) return 0;
  return node.value +
    Math.max(getMaxBinaryTreeBranchSum(node.left),
    getMaxBinaryTreeBranchSum(node.right))
}

function getMinBinaryTreeBranchSum(node) {
  if (!node) return 0;
  return node.value +
    Math.min(getMinBinaryTreeBranchSum(node.left),
    getMinBinaryTreeBranchSum(node.right))
}

module.exports = {getMaxBinaryTreeBranchSum, getMinBinaryTreeBranchSum}
