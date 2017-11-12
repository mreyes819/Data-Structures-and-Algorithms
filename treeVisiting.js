var binaryTree = require('./treeStructures');
// See: http://js-algorithms.tutorialhorizon.com/2015/10/12/binary-tree-traversal/

// 1) Write a function that visits a BST in ascending order, visiting nodes in-order.
function traverseTreeInOrderAscending(node, cb) {
  if (node.left) traverseTreeInOrderAscending(node.left, cb);
  if (node.value) cb(node);
  if (node.right) traverseTreeInOrderAscending(node.right, cb);
};
// traverseTreeInOrderAscending(binaryTree, (node) => console.log(node.value));  // A, B, C, D, E, F, G, H, I


// 2) Write a function that visits a BST in ascending order, visiting nodes pre-order.
function traverseTreePreOrderAscending(node, cb) {
  if (node.value) cb(node);
  if (node.left) traverseTreePreOrderAscending(node.left, cb);
  if (node.right) traverseTreePreOrderAscending(node.right, cb);
};
// traverseTreePreOrderAscending(binaryTree, (node) => console.log(node.value)); // F, B, A, D, C, E, G, I, H


// 3) Write a function that visits a BST in ascending order, visiting nodes post-order.
function traverseTreePostOrderAscending(node, cb) {
  if (node.left) traverseTreePostOrderAscending(node.left, cb);
  if (node.right) traverseTreePostOrderAscending(node.right, cb);
  if (node) cb(node);
};
// traverseTreePostOrderAscending(binaryTree, (node) => console.log(node.value)); // A, C, E, D, B, H, I, G, F


// 4) Write a function that visits a BST in descending order, visiting nodes in-order.
function traverseTreeInOrderDescending(node, cb) {
  if (node.right) traverseTreeInOrderDescending(node.right, cb);
  if (node.value) cb(node);
  if (node.left) traverseTreeInOrderDescending(node.left, cb);
}
// traverseTreeInOrderDescending(binaryTree, (node) => console.log(node.value)); // I, H, G, F, E, D, C, B, A


// 5) Write a function that visits a BST in descending order, visiting nodes pre-order.
function traverseTreePreOrderDescending(node, cb) {
  if (node.value) cb(node);
  if (node.right) traverseTreePreOrderDescending(node.right, cb);
  if (node.left) traverseTreePreOrderDescending(node.left, cb);
};
// traverseTreePreOrderDescending(binaryTree, (node) => console.log(node.value)); // F, G, I, H, B, D, E, C, A


// 6) Write a function that visits a BST in descending order, visiting nodes post-order.
function traverseTreePostOrderDescending(node, cb) {
  if (node.right) traverseTreePostOrderDescending(node.right, cb);
  if (node.left) traverseTreePostOrderDescending(node.left, cb);
  if (node) cb(node);
};
traverseTreePostOrderDescending(binaryTree, (node) => console.log(node.value)); // H, I, G, E, C, D, A, B, F








