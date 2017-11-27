const traverseBinaryTree = require('../traverseBinaryTree')
const binaryTree = require('../trees/treeBinarySearch')


describe('Breadth first', () => {
  test('in ascending order', () => {
    let result = [];
    traverseBinaryTree.breadthFirstAscending(binaryTree,
      (node) => result.push(node.value));
    expect(result.join('')).toEqual('fbgadiceh')
  });

  test('in descending order', () => {
    let result = [];
    traverseBinaryTree.breadthFirstDescending(binaryTree,
      (node) => result.push(node.value));
    expect(result.join('')).toEqual('fgbidahec')
  });
});


describe('Pre-Order', () => {
  test('ascending', () => {
    let result = [];
    traverseBinaryTree.preOrderAscending(binaryTree,
      (node) => result.push(node.value));
    expect(result.join('')).toEqual('fbadcegih')
  });

  test('descending', () => {
    let result = [];
    traverseBinaryTree.preOrderDescending(binaryTree,
      (node) => result.push(node.value));
    expect(result.join('')).toEqual('fgihbdeca')
  });
});

