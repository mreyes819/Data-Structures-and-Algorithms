// non binary tree
nonBinaryTree = {
  value: null,
  children: []
};

nonBinarytreeExampleData = {
  value: 3,
  children: [{
    value: 2,
    children: []
  }, {
    value: 1,
    children: []
  }, ]
};

// binary tree
binaryTree = {
  value: null,
  left: null,
  right: null
}

// binary search tree
binaryTreeExampleData = {
  value: 'f',
  left: {
    value: 'b',
    left: {
      value: 'a',
      left: null,
      right: null
    },
    right: {
      value: 'd',
      left: {
        value:'c',
        left: null,
        right: null
      },
      right: {
        value:'e',
        left: null,
        right: null
      }
    }
  },
  right: {
    value: 'g',
    left: null,
    right: {
      value: 'i',
      left: {
        value: 'h',
        left: null,
        right: null
      }
    }
  }
}

module.exports = {binaryTreeExampleData, nonBinarytreeExampleData}