binaryTree = {
  value: 10,
  left: {
    value: 5,
    left: {
      value: 1,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    value: 15,
    left: null,
    right: null
  }
}

// 1) Write a function that finds the smallest value in a BST.
function getBinaryMinValue(tree) {
  if (!tree.left) return tree.value;
  while(tree.left) {
    return getBinaryMinValue(tree.left)
  }
}

// console.log(getBinaryMinValue(binaryTree));


// 2) Write a function that finds the largest value in a BST
function getBinaryMaxValue(tree) {
  if (!tree.right) return tree.value;
  while(tree.right) {
    return getBinaryMaxValue(tree.right)
  }
}

// console.log(getBinaryMaxValue(binaryTree));