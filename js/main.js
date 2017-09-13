// function kill() {
//     /**
//      * 转盘容器
//      * @type {Object}
//      */
//     this.container = document.getElementById('container');
//     this.turnplate = document.createElement('div');
//
//     this.init = function(num) {
//         this.drawTurnplate(num);
//         this.drawTrianglePointer();
//     }
//
//     this.drawTrianglePointer = function() {
//         var pointerBox = document.createElement('div');
//         pointerBox.id = 'pointerBox';
//
//         var trianglePointer = document.createElement('div');
//         trianglePointer.id = 'trianglePointer';
//         pointerBox.appendChild(trianglePointer);
//
//         var pointer = document.createElement('div');
//         pointer.id = 'pointer';
//         pointerBox.appendChild(pointer);
//
//         this.container.appendChild(pointerBox);
//     }
//
//     this.drawTurnplate = function(num =  8) {
//         // @TODO 参数后期再封装
//         // 转盘容器
//         /**
//          * 转盘容器
//          * @type {object}
//          */
//         var turnplate = this.turnplate;
//         // console.log('in line 17');
//         // console.log(turnplate);
//         // 转盘半径
//         /**
//          * 转盘半径
//          * @type {Number}
//          */
//         var turnplateRadius = 200;
//         // 转盘的块数
//         /**
//          * 转盘的块数
//          * @type {int}
//          */
//         var this.count = num;
//
//         /**
//          *  每一块转盘三角形块的圆周角,单位：弧度
//          * 本来应该是 (Math.PI * 2) / (count * 2)，约掉 2
//          * @type {float}
//          */
//         var itemAngle = (Math.PI / count) * 2;
//         // console.log('in line 33:');
//         // console.log(itemAngle);
//         /**
//          * 转盘三角形块的的高
//          * @type {Number}
//          */
//         var itemHight = 200;
//         // 转盘三角形的底的一半
//         /**
//          * 转盘三角形的底的一半
//          * @type {float}
//          */
//         var halfItemWidth = Math.tan(itemAngle / 2) * itemHight;
//         //
//         /**
//          * 存放转盘三角形子块的数组,没必要
//          * @type {Array}
//          */
//         var triangles  = [];
//         /**
//          * 初始化转盘三角子块
//          * @type {object}
//          */
//         var initItem = document.createElement('div')
//         triangles[0] = initItem;
//
//         initItem.id = 'initItem';
//         initItem.className = 'initItem';
//
//         var img = document.createElement('img');
//         img.src = 'http://tse2.mm.bing.net/th?id=OIP.nq3nPfEjg3Ro-qzBK8qP1AEsEr&pid=15.1';
//         var p = document.createElement('p');
//         p.innerHTML = '1';
//
//         initItem.appendChild(img);
//         initItem.appendChild(p);
//         // console.log(initItem);
//
//         // @TODO 这里得处理一下 类似于奇数份的问题
//
//
//         initItem.style.borderLeftWidth = halfItemWidth + 'px';
//         initItem.style.borderRightWidth = halfItemWidth + 'px';
//         initItem.style.borderTopColor = '#eee';
//
//         // @FIXME 这里的值不对
//         initItem.style.left = turnplateRadius - halfItemWidth + 'px';
//
//         // 制造其他三角形子块，并旋转 itemAngle 度
//         for ( var i = 0 ; i < count ; i ++ ) {
//             // console.log(itemAngle);
//             triangles[i] = initItem.cloneNode(true);
//
//             // console.log(triangles[i]);
//             triangles[i].childNodes[1].innerHTML = 'i='+ (20 - i);
//
//             var div = triangles[i];
//             div.id = 'triangle' + i;
//             div.style.borderLeftWidth = halfItemWidth;
//             div.style.borderRightWidth = halfItemWidth;
//             div.style.transform = 'rotate(' + itemAngle * 57.3 * i +'deg)';
//             console.log(div.style.transform);
//             div.style.borderTopColor = (i + 1) % 2 == 0 ? '#888' : '#222';
//             turnplate.appendChild(div);
//         }
//         // triangles[1].style.zIndex = 1;
//         this.turnplate.id = 'turnplate';
//         // var p = document.createElement('p')
//         // p.innerHTML = "中"
//         // this.turnplate.appendChild(p)
//         this.container.appendChild(this.turnplate);
//         // triangles[19].innerHTML = '测试';
//     };
//
//     this.godGiveYouLuckyAndGold = function (range = 100) {
//         /**
//          * 生成的 1 到 100 的随机数
//          * @type {Float}
//          */
//         var randomNum = parseFloat(Math.random() * range) ;
//         /**
//          * 这是你的幸运与黄金
//          * @type {int}
//          */
//         var luckyAndCold = 0;
//         if(randomNum < 5 && randomNum >= 0) {
//             luckyAndGold = 1
//         } else if( ( randomNum >= 20 && randomNum < 25 ) ||
//                     ( randomNum >= 40 && randomNum < 45 ) ||
//                     ( randomNum >= 60 && randomNum < 65 ) ||
//                     ( randomNum >= 80 && randomNum < 85 ) ) {
//             luckyAndGold = parseInt(randomNum / 20) * 4 + 1 ;
//         }else {
//             luckyAndGold = Math.ceil(randomNum / 5);
//         }
//         console.log('luckyAndGold' + luckyAndGold);
//
//         return ( 360 / 20 ) * luckyAndGold;
//     }
//
//     this.rotate = function() {
//         console.log('dome');
//         var deg = 3600 + tp.godGiveYouLuckyAndGold();
//         this.turnplate.style.transform = 'rotate(' + deg + 'deg)';
//     }
// }

// turnplate.property.init =
/**
 * 参考 <a herf="http://www.cnblogs.com/coco1s/p/5261646.html">jquery 源码分析</a>
 * @param  {Object} window
 * @param  {undefined} undefined 参见参考
 * @return {void}
 */
(function( window, undefined ){
    turnplate = function( id, data, config ) {
        return new turnplate.fn.init( id, data, config );
    }
    turnplate.fn = turnplate.prototype = {

        constructor: turnplate,
        /**
         * 初始化函数
         * @param  {String} [id='turnplateContainer'] 转盘容器的 id
         * @param  {Array}  [data=[]]                 数据转盘显示数据，格式如下：
        *                                                  [{name    : String,
        *                                                    img     : String,
        *                                                    bgColor : String,
        *                                                    surplus : Number},
        *                                                    ... ... ]
         * @param  {Object} [config={}]               这个参数是配置转盘大小、可点次数、外观样式的、
         *                                            位置设置 ... ...
         * @return {Object}                           返回转盘对象本身
         */
        init: function (id = 'turnplateContainer', data = [], config = {} ) {

            /**
             * 最外层大容器
             * @type {Object}
             */
            this.container = document.getElementById(id);
            /**
             * 转盘容器
             * @type {object}
             */
            var turnplate = this.turnplate;
            this.turnplate    = document.createElement('div');
            this.turnplate.id = 'turnplate';

            /**
             * 转盘半径
             * @type {Number}
             */
            this.turnplateRadius = 200;

            /**
             * 转盘的块数
             * @type {Number}
             */
            this.count       = data.length;

            this.names       = [];
            this.imgs        = [];
            this.bgColors     = [];
            this.surpluses   = [];

            if( data.length > 0 ) {
                for ( val in data ) {
                    console.log(val);
                    this.names.push( data[val].name );
                }
                for ( val in data ) {
                    this.imgs.push( data[val].img );
                }
                for ( val in data ) {
                    this.bgColors.push( data[val].bgColor );
                }
                for ( val in data ) {
                    this.surpluses.push( data[val].surplus );
                }
            }
            return this;
        },

        drawTurnplate : function() {

            /**
             *  每一块转盘三角形块的圆周角,单位：弧度
             * 本来应该是 (Math.PI * 2) / (this.count * 2)，约掉 2
             * @type {float}
             */
            var itemAngle = (Math.PI / this.count) * 2;
            // console.log('in line 33:');
            // console.log(itemAngle);
            /**
             * 转盘三角形块的的高
             * @type {Number}
             */
            var itemHight = this.turnplateRadius;
            /**
             * 转盘三角形的底的一半
             * @type {Number}
             */
            var halfItemWidth = Math.tan(itemAngle / 2) * itemHight;

            /**
             * 初始化转盘三角子块
             * @type {Object}
             */
            var initItem = document.createElement('div')
            initItem.id = 'initItem';
            initItem.className = 'initItem';

            var img = document.createElement('img');
            img.src = 'http://tse2.mm.bing.net/th?id=OIP.nq3nPfEjg3Ro-qzBK8qP1AEsEr&pid=15.1';
            var p = document.createElement('p');
            p.innerHTML = '1';

            initItem.appendChild(img);
            initItem.appendChild(p);
            // console.log(initItem);

            // @TODO 这里得处理一下 类似于奇数份的问题
            // 自动生成的话，这问题应该由客户端程序员解决

            initItem.style.borderLeftWidth = halfItemWidth + 'px';
            initItem.style.borderRightWidth = halfItemWidth + 'px';
            initItem.style.borderTopColor = '#eee';

            initItem.style.left = this.turnplateRadius - halfItemWidth + 'px';

            // 制造其他三角形子块，并旋转 itemAngle 度
            for ( var i = 0 ; i < this.count ; i ++ ) {
                // console.log(itemAngle);
                var div = initItem.cloneNode(true);

                // @TODO 在这里填充数据
                // div.childNodes[0].src = this.imgs[i];
                // div.childNodes[1].innerHTML = this.names[i];

                div.id = 'triangle' + i;
                div.style.borderLeftWidth = halfItemWidth;
                div.style.borderRightWidth = halfItemWidth;
                div.style.transform = 'rotate(' + itemAngle * 57.3 * i +'deg)';
                // div.style.borderTopColor = (i + 1) % 2 == 0 ? '#888' : '#222';
                div.style.borderTopColor = this.bgColors[i];
                this.turnplate.appendChild(div);
            }
            this.container.appendChild(this.turnplate);
        },

        drawTrianglePointer : function() {
            var pointerBox    = document.createElement('div');
            pointerBox.id = 'pointerBox';

            var trianglePointer    = document.createElement('div');
            trianglePointer.id = 'trianglePointer';

            var pointerCircle = document.createElement('div');
            pointerCircle.id = 'pointerCircle';
            pointerCircle.onclick = function() {
                // @TODO 这里调用抽奖方法
                alert(1);
            }

            pointerBox.appendChild(trianglePointer);
            pointerBox.appendChild(pointerCircle);

            this.container.appendChild(pointerBox);
           }
    },

    godGiveYouLuckyAndGold : function (range = 100) {
         /**
          * 生成的 1 到 100 的随机数
          * @type {Number}
          */
         var randomNum = parseFloat(Math.random() * range) ;
         /**
          * 这是你的幸运与黄金
          * @type {Number}
          */
         var luckyAndCold = 0;

        //  @TODO 下面抽奖策略，目前比较简陋，待优化
         if(randomNum < 5 && randomNum >= 0) {
             luckyAndGold = 1
         } else if( ( randomNum >= 20 && randomNum < 25 ) ||
                     ( randomNum >= 40 && randomNum < 45 ) ||
                     ( randomNum >= 60 && randomNum < 65 ) ||
                     ( randomNum >= 80 && randomNum < 85 ) ) {
             luckyAndGold = parseInt(randomNum / 20) * 4 + 1 ;
         }else {
             luckyAndGold = Math.ceil(randomNum / 5);
         }
         console.log('luckyAndGold' + luckyAndGold);

         return ( 360 / 20 ) * luckyAndGold;
     }

    turnplate.fn.init.prototype = turnplate.fn;

})(window);
var data = [{name    : 'String',
            img     : 'String',
            bgColor : 'String',
            surplus : 10},
            {name    : 'String1',
            img     : 'String1',
            bgColor : 'String1',
            surplus : 11}];
var tp = turnplate('container', data );
tp.drawTrianglePointer();
tp.drawTurnplate();
console.log(tp);
// console.log(window);
// console.log(turnplate.container);

// {
//     { 'name'      : 'first_price' },
//     { 'img'       : "url to img "},
//     {'posibility' : 20 },
//     ... ...
// }
