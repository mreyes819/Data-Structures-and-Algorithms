// non binary tree
nonBinaryTree = {
  value: null,
  children: []
};

// binary tree
binaryTree = {
  value: null,
  left: null,
  right: null
}

// binary search tree
binaryTree = {
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

module.exports = binaryTree;