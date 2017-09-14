/***********************************************************************
************************************************************************
**   athur: yidafu                                                    **
**   date: 2017-09-13                                                 **
**   time: 12:38                                                      **
**   decribetion: ...                                                 **
************************************************************************
************************************************************************/
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



        /**
        * 这是你的幸运与黄金
        * @type {Number}
        */
        luckyAndCold: 0,

        /**
         * 中奖数据
         * @type {Number}
         */
         winning : 0,

        itself : this,

        /**
         * 转盘容器
         * @type {object}
         */
        turnplate : document.createElement('div'),

        /**
         * 旋转角度
         * @type {Number}
         */
        degree : 0,

        /**
         * 抽奖数据
         * @type {Array}
         */
        data : [],

        /**
         * 背景颜色配置数据
         * @type {Array}
         */
        bgColors : ['#eee', '#233'],
        /**
         * 初始化函数
         * @param  {String} [id='turnplateContainer'] 转盘容器的 id
         * @param  {Array}  [data=[]]                 数据转盘显示数据，格式如下：
         *                                                  [{name    : String,
         *                                                    num : Number
         *                                                    probability: Number},
         *                                                    ... ... ]
         * @return {Object}                           返回转盘对象本身
         */
         /**
          * 构造函数
          * @type {Function}
          */
        constructor: turnplate,

        /**
         * [description]
         * @param  {String} [id='turnplateContainer'] 转盘容器ID
         * @param  {Array}  [data=[]]                 抽奖数据
         * @return {void}
         */
        init: function ( id = 'turnplateContainer', data = [], func ) {
            /**
             * 最外层容器
             * @type {Object}
             */
            turnplate.container = this.container = document.getElementById(id);
            this.turnplate.id = 'turnplate';

            /**
             * 转盘半径
             * @type {Number}
             */
            turnplate.turnplateRadius = this.turnplateRadius = 200;

            /**
             * 转盘的块数
             * @type {Number}
             */
            turnplate.count = this.count = 12;
            turnplate.data = this.data = data;

            turnplate.cb = this.bc = func;
            return this;
        },
        /**
         * 抽奖转盘的绘制函数
         * @return {void}
         */
        drawTurnplate: function() {

            /**
             *  每一块转盘三角形块的圆周角,单位：弧度
             * 本来应该是 (Math.PI * 2) / (this.count * 2)，约掉 2
             * @type {float}
             */
            var itemAngle = (Math.PI / this.count) * 2;

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

            var p = document.createElement('p');
            p.innerHTML = '1';

            initItem.appendChild(p);

            // @TODO 这里得处理一下 类似于奇数份的问题
            // 自动生成的话，这问题应该由客户端程序员解决

            initItem.style.borderLeftWidth = halfItemWidth + 'px';
            initItem.style.borderRightWidth = halfItemWidth + 'px';
            initItem.style.borderTopColor = '#eee';

            initItem.style.left = this.turnplateRadius - halfItemWidth + 'px';

            // 制造其他三角形子块，并旋转 itemAngle 度
            for ( var i = 0 ; i < this.count ; i ++ ) {

                var div = initItem.cloneNode(true);

                // @TODO 在这里填充数据
                if ( i == 0 ) {
                    div.firstChild.innerHTML = this.data[0].name ;
                } else if( i % 2 == 0 ) {
                    div.firstChild.innerHTML = this.data[1].name ;
                } else {
                    div.firstChild.innerHTML = this.data[2].name ;
                }
                // div.childNodes[0].src = this.imgs[i];

                div.id = 'triangle' + i;
                div.style.borderLeftWidth = halfItemWidth;
                div.style.borderRightWidth = halfItemWidth;
                div.style.transform = 'rotate(' + itemAngle * 57.3 * i +'deg)';
                div.style.borderTopColor = (i + 1) % 2 == 0 ? this.bgColors[0] : this.bgColors[1];
                this.turnplate.appendChild(div);
            }
            this.container.appendChild(this.turnplate);
        },

        /**
         * 抽奖指针的绘制函数
         * @return {void}
         */
        drawTrianglePointer : function() {
            var pointerBox    = document.createElement('div');
            pointerBox.id = 'pointerBox';

            var trianglePointer    = document.createElement('div');
            trianglePointer.id = 'trianglePointer';

            var pointerCircle = document.createElement('div');
            pointerCircle.id = 'pointerCircle';

            pointerCircle.onclick = function(itself) {
                // @FIXME 这里的节点寻找太麻烦了
                itself.view.turnplate.fn.fisrtRotationForce();

            }

            pointerBox.appendChild(trianglePointer);
            pointerBox.appendChild(pointerCircle);

            this.container.appendChild(pointerBox);
        },
        /**
         *  抽奖的主要函数，这个方法决定了抽奖的概率
         * @param  {Number} [range=60]  总概率
         * @return {Number}             一个合格抽奖结果
         */
        godGiveYouLuckyAndGold : function (range = 60) {
            /**
            * 生成的 1 到 60 的随机数
            * @type {Number}
            */

            var randomNum = parseFloat(Math.random() * range) ;
            // @FIXME 这里的存在作用域问题，无法访问到 this.data
            var data = window.turnplate.data;
            var remainder = randomNum % 10;
            if( parseInt( data[0].num ) == 0
                &&  parseInt( data[1].num ) == 0
                &&  parseInt( data[2].num ) == 0 ) {
                    alert('奖品已经抽完了！');
            }
            if(randomNum < 5 && randomNum >= 0) {
                if ( data[0].num <= 0 ) {
                    this.luckyAndGold = this.godGiveYouLuckyAndGold()
                } else {
                    this.luckyAndGold = 0
                }
                this.winning = 1;
            } else if( remainder < 5 && remainder >= 0 ) {
                if ( data[1].num <= 0 ) {
                    this.luckyAndGold = this.godGiveYouLuckyAndGold()
                } else {
                    this.luckyAndGold = parseInt(randomNum / 5 );
                }
                this.winning = 2;
            }else {
                if ( data[2].num <= 0 ) {
                    this.luckyAndGold = this.godGiveYouLuckyAndGold()
                } else {
                    this.luckyAndGold = parseInt(randomNum / 5);
                }
                this.winning = 3;
            }
            return this.luckyAndGold;
        },

         /**
          * 令 turnplate 对象旋转的函数
          * @return {void}
          */
         fisrtRotationForce : function() {
             var luckyAndGold = this.godGiveYouLuckyAndGold();
             var winning = this.winning;
             if (luckyAndGold == null ) {
                 return;
             }
             this.degree = 7200 + ( ( 360 / 12 ) * luckyAndGold );

             this.turnplate.previousSibling.childNodes[1].setAttribute( 'onclick', true );
             /**
              * 参见：<a herf="http://www.cnblogs.com/leon2016/p/5932061.html">链接<a>
              * 另参见：<a herf="http://www.jb51.net/article/40524.htm">链接<a>
              */
            window.setTimeout(function(){
                if( luckyAndGold == 0 ){
                    alert('一等奖');
                } else if( luckyAndGold % 2 == 0 ) {
                    alert('二等奖');
                } else {
                    alert('三等奖');
                }
                // @TODO 这里发送 ajax 请求
                turnplate.cb();
                console.log('这里是发给后端的数据：||| ' + winning + ' |||');
            }, 6000)
             this.turnplate.style.transform = 'rotate(' + this.degree + 'deg)';
         },

         getWinningNum : function() {
            return this.winning;
        },
         draw : function () {
             tp.drawTrianglePointer();
             tp.drawTurnplate();
         }
    };

    turnplate.fn.init.prototype = turnplate.fn;

})(window);
