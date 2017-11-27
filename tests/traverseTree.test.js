const traverseTree = require('../traverseTree');
const tree = require('../trees/tree');


test('ascending order', () => {
  const result = [];
  traverseTree.breadthFirstAscending(tree,
    (node) => result.push(node.value));
  expect(result.join('')).toEqual('312abc')
});

test('descending order', () => {
  const result = [];
  traverseTree.breadthFirstDescending(tree,
    (node) => result.push(node.value));
  expect(result.join('')).toEqual('321cba')
});

