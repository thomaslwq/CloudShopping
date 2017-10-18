import IndexQueryMockData from "../home/IndexQueryMockData"
let $ = require('jquery')
let allMockData = {};
// 将所有的模拟数据组合在一起
allMockData = $.extend({},
    IndexQueryMockData
);



export default allMockData