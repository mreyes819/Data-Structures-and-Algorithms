// require('./trees/treeStructures'); // binaryTreeExampleData

// 1) A function that finds the smallest value in a BST.
function getMinValue(tree) {
  if (!tree.left) return tree.value;
  while(tree.left) {
    return getMinValue(tree.left)
  }
}
// console.log(getMinValue(binaryTreeExampleData)); // a


// 2) Write a function that finds the largest value in a BST
function getMaxValue(tree) {
  if (!tree.right) return tree.value;
  while(tree.right) {
    return getMaxValue(tree.right)
  }
}
// console.log(getMaxValue(binaryTreeExampleData)); // i


module.exports.getMinValue = getMinValue;
module.exports.getMaxValue = getMaxValue;
