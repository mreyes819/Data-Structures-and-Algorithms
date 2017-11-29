// Get the smallest value from a BST.
function getMinValue(tree) {
  if (!tree.left) return tree.value;
  while(tree.left) {
    return getMinValue(tree.left)
  }
}

// Get the largest value from a BST
function getMaxValue(tree) {
  if (!tree.right) return tree.value;
  while(tree.right) {
    return getMaxValue(tree.right)
  }
}


module.exports = {getMinValue, getMaxValue}
