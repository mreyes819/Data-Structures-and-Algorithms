const LinkedList = require('../LinkedList').LinkedList;

describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  test('should have a head and tail', function() {
    expect(linkedList).toHaveProperty('head');
    expect(linkedList).toHaveProperty('tail');
  });

  test('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).toBeInstanceOf(Function);
    expect(linkedList.removeHead).toBeInstanceOf(Function);
    expect(linkedList.contains).toBeInstanceOf(Function);
  });

  test('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).toEqual(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).toEqual(5);
  });

  test('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).toEqual(4);
    linkedList.removeHead();
    expect(linkedList.head.value).toEqual(5);
  });

  test('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).toEqual(4);
  });

  test('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).toBeTruthy();
    expect(linkedList.contains(5)).toBeTruthy();
    expect(linkedList.contains(6)).toBeFalsy();
  });

  test('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).toBeFalsy();
  });

});
