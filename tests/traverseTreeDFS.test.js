const nonBinaryDF = require('../traverseTreeDFS').nonBinaryDF;
const binaryDF = require('../traverseTreeDFS').binaryDF;

const nonBinarytree = {
  value: 4,
  children: [{
    value: 3,
    children: [{
      value: 2,
      children: []
    }]
  }, {
    value: 1,
    children: []
  }, ]
};


test('Should traverse a non binary tree depth first', () => {
  let result = [];
  nonBinaryDF(nonBinarytree, (node) => result.push(node.value));
  expect(result).toEqual([4,3,2,1]);
});

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

test('Should traverse a binary tree depth first', () => {
  let result = [];
  binaryDF(binaryTree, (node) => result.push(node.value));
  expect(result).toEqual([4,8,7,9])
});