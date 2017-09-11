function log(log) {
    console.log(log);
}


function drawTurnplate(num =  8) {
    // @TODO 参数后期再封装
    // 转盘容器
    /**
     * 转盘容器
     * @type {object}
     */
    var turnplate = document.getElementById('turnplate');
    // 转盘半径
    /**
     * 转盘半径
     * @type {Number}
     */
    var turnplateRadius = 200;
    // 转盘的块数
    /**
     * 转盘的块数
     * @type {int}
     */
    var count = num;

    /**
     *  每一块转盘三角形块的圆周角,单位：弧度
     * 本来应该是 (Math.PI * 2) / (count * 2)，约掉 2
     * @type {float}
     */
    var itemAngle = (Math.PI / count) * 2;
    //
    /**
     * 转盘三角形块的的高
     * @type {Number}
     */
    var itemHight = 200;
    // 转盘三角形的底的一半
    /**
     * 转盘三角形的底的一半
     * @type {float}
     */
    var halfItemWidth = Math.tan(itemAngle / 2) * itemHight;
    //
    /**
     * 存放转盘三角形子块的数组
     * @type {Array}
     */
    var triangles  = [];
    /**
     * 初始化转盘三角子块
     * @type {object}
     */
    var initItem = document.createElement('div')
    triangles[0] = initItem;
    // log(initItem);
    var style = initItem.style;
    initItem.id = 'initItem';
    initItem.className = 'initItem';
    // @TODO 这里得处理一下 类似于奇数份的问题
    style.borderLeft = halfItemWidth + 'px transparent solid';
    style.borderRight = halfItemWidth + 'px transparent solid';
    style.borderTopColor = '#eee';
    style.left = turnplateRadius - halfItemWidth + 'px';

    // 制造其他三角形子块，并旋转 itemAngle 度
    for ( var i = 1 ; i < count ; i ++ ) {
        triangles[i] = initItem.cloneNode();
        var div = triangles[i];
        div.id = 'triangle' + i;
        div.style.borderLeftWidth = halfItemWidth;
        div.style.borderRightWidth = halfItemWidth;
        div.style.transform = 'rotate(' + itemAngle * 57.3 * (i + 1) +'deg)';
        div.style.borderTopColor = (i + 1) % 2 == 0 ? '#888' : '#fff';
        turnplate.appendChild(div);
    }
}
drawTurnplate(10);
var deg = 3000;
document.getElementById('btn').onclick = function() {
turnplate.style.transform = 'rotate(' + deg + 'deg)';
}
// console.log(Math.atan(0.25) * 57.3);
