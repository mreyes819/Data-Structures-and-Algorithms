const traverseTree = require('../traverseTreeAlgorithms');
const tree = require('../treeExamples/exampleTree');


test('should taverse a tree breadth first left to right', () => {
  const result = [];
  traverseTree.breadthFirstAscending(tree,
    (node) => result.push(node.value));
  expect(result.join('')).toEqual('312abc');
});

test('should traverse a tree breadth first right to left', () => {
  const result = [];
  traverseTree.breadthFirstDescending(tree,
    (node) => result.push(node.value));
  expect(result.join('')).toEqual('321cba');
});

test('should traverse a tree pre-order left to right', () => {
  const result = [];
  traverseTree.preOrderAscending(tree, child => result.push(child.value));
  expect(result.join('')).toEqual('31a2bc');
});

test('should traverse a tree pre-order right to left', () => {
  const result = [];
  traverseTree.preOrderDescending(tree, child => result.push(child.value));
  expect(result.join('')).toEqual('32cb1a');
});

test('should traverse a tree post-order left to right', () => {
  const result = [];
  traverseTree.postOrderAscending(tree, child => result.push(child.value));
  expect(result.join('')).toEqual('a1bc23');
});

test('should traverse a tree post-order right to left', () => {
  const result = [];
  traverseTree.postOrderDescending(tree, child => result.push(child.value));
  expect(result.join('')).toEqual('cb2a13');
})




