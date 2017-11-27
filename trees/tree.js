module.exports = {
  value: 3,
  children: [{
    value: 1,
    children: [{
      value: 'a',
      children: []
    }]
  }, {
    value: 2,
    children: [{
      value: 'b',
      children: []
    }, {
      value: 'c',
      children: [
      // {
      //   value: '1a',
      //   children: []
      // }, {
      //   value: '2b',
      //   children: []
      // }
      ]
    }]
  }]
};
