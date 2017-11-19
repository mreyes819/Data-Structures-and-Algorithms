
// 1) Write a function that prints a BST in ascending order.
function printTreeAscending(tree) {
  if (tree.left) printTreeAscending(tree.left);
  if (tree.value) console.log(tree.value);
  if (tree.right) printTreeAscending(tree.right);
};

// console.log(binaryTree)
printTreeAscending(binaryTree); // A,B,C,D,E,F,G,H,I


// 2) Write a function that prints a BST in descending order.
function printTreeDescending(tree) {
  if (tree.right) printTreeDescending(tree.right);
  if (tree.value) console.log(tree.value);
  if (tree.left) printTreeDescending(tree.left);
};
printTreeDescending(binaryTree); // I,H,G,F,E,D,C,B,A


module.exports.printTreeAscending = printTreeAscending;
module.exports.printTreeDescending = printTreeDescending;
