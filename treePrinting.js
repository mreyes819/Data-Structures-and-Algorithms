var binaryTree = require('./treeStructures');
// console.log(binaryTree)
// binaryTree = {
//   value: 'f',
//   left: {
//     value: 'b',
//     left: {
//       value: 'a',
//       left: null,
//       right: null
//     },
//     right: {
//       value: 'd',
//       left: {
//         value:'c',
//         left: null,
//         right: null
//       },
//       right: {
//         value:'e',
//         left: null,
//         right: null
//       }
//     }
//   },
//   right: {
//     value: 'g',
//     left: null,
//     right: {
//       value: 'i',
//       left: {
//         value: 'h',
//         left: null,
//         right: null
//       }
//     }
//   }
// }

// 1) Write a function that prints a BST in ascending order.
function printTreeAscending(tree) {
  if (tree.left) printTreeAscending(tree.left);
  if (tree.value) console.log(tree.value);
  if (tree.right) printTreeAscending(tree.right);
};

// printTreeAscending(binaryTree); // A,B,C,D,E,F,G,H,I


// 2) Write a function that prints a BST in descending order.
function printTreeDescending(tree) {
  if (tree.right) printTreeDescending(tree.right);
  if (tree.value) console.log(tree.value);
  if (tree.left) printTreeDescending(tree.left);
};
printTreeDescending(binaryTree); // I,H,G,F,E,D,C,B,A





// print tree level by level down
// function printTreeDescending(tree) {
//   let queue = [tree];
//   let node;
//   function level(nodes) {
//     node = nodes.shift();
//     if (node) {
//       console.log(node.value)
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//       level(queue);
//     }
//   }
//   level(queue);

// }
//Descending: F,B,G,A,D,I,C,E,H
// printTreeDescending(binaryTree)
