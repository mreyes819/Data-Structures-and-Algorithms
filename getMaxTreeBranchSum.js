var exports = module.exports = {}

exports.getMaxTreeBranchSum = function (node) {
  if (!node) return 0;
  return node.value +
    Math.max(getMaxTreeBranchSum(node.left),
    getMaxTreeBranchSum(node.right))
}