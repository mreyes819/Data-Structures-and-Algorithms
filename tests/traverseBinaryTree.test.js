const traverseBinaryTree = require('../traverseBinaryTree');
const binaryTree = require('../trees/treeBinarySearch');


describe('Breadth first', () => {
  test('should traverse in ascending order', () => {
    const result = [];
    traverseBinaryTree.breadthFirstAscending(binaryTree,
      (node) => result.push(node.value));
    expect(result.join('')).toEqual('fbgadiceh');
  });

  test('should traverse in descending order', () => {
    const result = [];
    traverseBinaryTree.breadthFirstDescending(binaryTree,
      (node) => result.push(node.value));
    expect(result.join('')).toEqual('fgbidahec');
  });
});


describe('Pre-Order', () => {
  test('should traverse in ascending order', () => {
    const result = [];
    traverseBinaryTree.preOrderAscending(binaryTree,
      (node) => result.push(node.value));
    expect(result.join('')).toEqual('fbadcegih');
  });

  test('should traverse in descending order', () => {
    const result = [];
    traverseBinaryTree.preOrderDescending(binaryTree,
      (node) => result.push(node.value));
    expect(result.join('')).toEqual('fgihbdeca');
  });
});


describe('In-Order', () => {
  test('should traverse in ascending order', () => {
    const result = [];
    traverseBinaryTree.inOrderAscending(binaryTree,
      (node) => result.push(node.value));
    expect(result.join('')).toEqual('abcdefghi');
  });

  test('should traverse in descending order', () => {
    const result = [];
    traverseBinaryTree.inOrderDescending(binaryTree,
      (node) => result.push(node.value));
    expect(result.join('')).toEqual('ihgfedcba');
  });
})


describe('Post-Order', () => {
  test('should traverse in ascending order', () => {
    const result = [];
    traverseBinaryTree.postOrderAscending(binaryTree,
      (node) => result.push(node.value));
    expect(result.join('')).toEqual('acedbhigf');
  });

  test('should traverse in descending order', () => {
    const result = [];
    traverseBinaryTree.postOrderDescending(binaryTree,
      (node) => result.push(node.value));
    expect(result.join('')).toEqual('higecdabf')
  });
});


