const Grid = tui.Grid;
const Pagination = tui.Pagination;


$(function() {
    var gridData = [];

    for(var i = 1; i <= 10; i++) {
        gridData.push({
            id: i,
            name: "밥"+i,
            price: i+"0,000원",

        });
    }

    const grid = new tui.Grid({
        el: document.getElementById('grid'),
        data: gridData,
        columns: [
            {
                header: 'No',
                name: 'id'
            },
            {
                header: '이름',
                name: 'name'
            },
            {
                header: '가격',
                name: 'price'
            }
        ]
    });

    const instance = new Pagination('tui-pagination-container', {
      totalItems: 500
    });
})