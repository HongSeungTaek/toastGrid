const Tree = tui.Tree;


document.addEventListener("DOMContentLoaded", function(){
  function addEventListener(element, eventName, handler) {
      if (element && element.addEventListener) {
          element.addEventListener(eventName, handler, false);
      } else {
          element.attachEvent('on' + eventName, handler);
      }
  }

  var data = [
    {text: 'rootA', children: [
        {text: 'sub-A1'},
        {text: 'sub-A2'},
        {text: 'sub-A3'},
        {text: 'sub-A4'},
        {text: 'sub-A5', state: 'closed', children: [
            {text:'sub-A5A', children:[
                {text:'sub-A5A1'}
            ]},
            {text:'sub_A5B'}
        ]},
        {text: 'sub-A6'},
        {text: 'sub-A7'},
        {text: 'sub-A8'},
        {text: 'sub-A9', state: 'closed', children: [
            {text:'sub-A9A'},
            {text:'sub-A9B'}
        ]},
        {text: 'sub-A10'},
        {text: 'sub-A11'},
        {text: 'sub-A12'}
    ]},
    {text: 'rootB', state:'closed', children: [
        {text:'sub-B1'},
        {text:'sub-B2'},
        {text:'sub-B3'}
    ]}
  ];

  var tree = new tui.Tree('#tree', {
    data: data,
    nodeDefaultState: 'opened'
  });

  var addChildBtn = document.getElementById('addChildBtn');
  var removeChildBtn = document.getElementById('removeChildBtn');
  var sortBtn = document.getElementById('sortBtn');
  var rootNodeId = tree.getRootNodeId();
  var firstChildId = tree.getChildIds(rootNodeId)[0];

  addEventListener(addChildBtn, 'click', function() {
    tree.add({text:'hello world'}, firstChildId);
  });

  addEventListener(removeChildBtn, 'click', function() {
    var lastGrandChildId = tree.getChildIds(firstChildId).slice(-1)[0];
    tree.remove(lastGrandChildId);
  });

  addEventListener(sortBtn, 'click', function() {
    tree.sort(function(nodeA, nodeB) {
        var aValue = nodeA.getData('text'),
            bValue = nodeB.getData('text');

        if (!aValue.localeCompare) {
            return 0;
        }
        return aValue.localeCompare(bValue);
    });
  });
});