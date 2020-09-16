var demoNodes=[
    {id: 1, label: 'node\none', shape: 'box', color:'#97C2FC'},
    {id: 2, label: 'node\ntwo', shape: 'circle', color:'#FFFF00'},
    {id: 3, label: 'node\nthree', shape: 'diamond', color:'#FB7E81'},
    {id: 4, label: 'node\nfour', shape: 'dot', size: 10, color:'#7BE141'},
    {id: 5, label: 'node\nfive', shape: 'ellipse', color:'#6E6EFD'},
    {id: 6, label: 'node\nsix', shape: 'star', color:'#C2FABC'},
    {id: 7, label: 'node\nseven', shape: 'triangle', color:'#FFA807'},
    {id: 8, label: 'node\neight', shape: 'triangleDown', color:'#6E6EFD'}
];
var demoNodeviews=[
    { id: 1, label: '*This* Eric Cartman', shape: 'text' ,age: 'kid', gender: 'male' , font: {background: 'red',size:15, color:'red', face:'courier', strokeWidth:3, strokeColor:'#ffffff'}, margin: { top: 10, right: 20, bottom: 30, left: -20 }, x: 300, y: -300},
    { id: 2, label: 'Stan Marsh', shape: 'circle' ,age: 'kid', gender: 'male' },
    { id: 3, label: 'Wendy Testaburger',shape: 'database', age: 'kid', gender: 'female' },
    { id: 4, label: 'Mr Mackey',shape: 'box' ,age: 'adult', gender: 'male' },
    { id: 5, label: 'Sharon Marsh',shape: 'ellipse' ,age: 'adult', gender: 'female' }
]
var demoNodesFilter = (node) => {
    if (nodeFilterValue === '') {
      return true
    }
    switch(nodeFilterValue) {
      case('kid'):
        return node.age === 'kid'
      case('adult'):
        return node.age === 'adult'
      case('male'):
        return node.gender === 'male'
      case('female'):
        return node.gender === 'female'
      default:
        return true
    }
  }