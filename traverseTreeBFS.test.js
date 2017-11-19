const nonBinaryBF = require('./traverseTreeBFS').nonBinaryBF;
const binaryBF = require('./traverseTreeBFS').binaryBF;

const nonBinarytree = {
  value: 3,
  children: [{
    value: 2,
    children: []
  }, {
    value: 1,
    children: []
  }, ]
};

test('Should print a non binary trees node values left to right breadth first', () => {
  let result = [];
  nonBinaryBF(nonBinarytree, (node) => result.push(node.value))
  expect(result).toEqual([3,2,1])
})

const binaryTree = {
  value: 4,
  left: {
    value: 8,
    left: {
      value: 7,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    value: 9,
    left: null,
    right: null
  }
};

test('Should print a binary trees node values left to right breadth first', () => {
  let result = [];
  binaryBF(binaryTree, (node) => result.push(node.value));
  expect(result).toEqual([4,8,9,7])
})

