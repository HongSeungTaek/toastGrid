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



    const container = document.getElementById('tui-pagination-container');

    const options = {
        totalItems: 10,
        itemsPerPage: 10,
        visiblePages: 10,
        page: 10,
        centerAlign: false,
        firstItemClassName: 'tui-first-child',
        lastItemClassName: 'tui-last-child',
        template: {
          page: '<a href="#" class="tui-page-btn">'+10+'</a>',
          currentPage: '<strong class="tui-page-btn tui-is-selected">'+10+'</strong>',
          moveButton:
            '<a href="#" class="tui-page-btn tui-move">' +
              '<span class="tui-ico-move">'+'M'+'</span>' +
            '</a>',
          disabledMoveButton:
            '<span class="tui-page-btn tui-is-disabled tui-disabled">' +
              '<span class="tui-ico-disabled">'+'D'+'</span>' +
            '</span>',
          moreButton:
            '<a href="#" class="tui-page-btn tui-more-is-ellip">' +
              '<span class="tui-ico-ellip">...</span>' +
            '</a>'
        }
      };

    const instance = new Pagination(container, options);
})