// require('./treeStructures'); // binaryTreeExampleData

// 1) Write a function that finds the smallest value in a BST.
function getBinaryMinValue(tree) {
  if (!tree.left) return tree.value;
  while(tree.left) {
    return getBinaryMinValue(tree.left)
  }
}
// console.log(getBinaryMinValue(binaryTreeExampleData)); // a


// 2) Write a function that finds the largest value in a BST
function getBinaryMaxValue(tree) {
  if (!tree.right) return tree.value;
  while(tree.right) {
    return getBinaryMaxValue(tree.right)
  }
}
// console.log(getBinaryMaxValue(binaryTreeExampleData)); // i


module.exports.getMinValue = getBinaryMinValue;
module.exports.getMaxValue = getBinaryMaxValue;
