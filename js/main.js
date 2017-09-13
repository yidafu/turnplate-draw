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

        constructor: turnplate,

        /**
        * 这是你的幸运与黄金
        * @type {Number}
        */
        luckyAndCold: 0,

        itself : this,

        /**
         * 转盘容器
         * @type {object}
         */
        turnplate : document.createElement('div'),

        /**
         * 初始化函数
         * @param  {String} [id='turnplateContainer'] 转盘容器的 id
         * @param  {Array}  [data=[]]                 数据转盘显示数据，格式如下：
         *                                                  [{name    : String,
         *                                                    img     : String,
         *                                                    bgColor : String,
         *                                                    surplus : Number},
         *                                                    ... ... ]
         * @return {Object}                           返回转盘对象本身
         */
        init: function (id = 'turnplateContainer', data = [] ) {



            /**
             * 最外层大容器
             * @type {Object}
             */
            this.container = document.getElementById(id);
            // /**
            //  * 转盘容器
            //  * @type {object}
            //  */
            // this.turnplate    = document.createElement('div');
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
            this.count       = 12;

            this.names       = ['一等奖','二等奖','二等奖','二等奖','二等奖','二等奖'];
            // this.imgs        = [];
            // this.bgColors     = [];
            // this.surpluses   = [];

            return this;
        },

        drawTurnplate: function() {

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
            // img.src = 'http://tse2.mm.bing.net/th?id=OIP.nq3nPfEjg3Ro-qzBK8qP1AEsEr&pid=15.1';
            img.src = null;
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
                if( i % 2 == 0 ) {
                    div.childNodes[1].innerHTML = this.names[i / 2];
                } else {
                    div.childNodes[1].innerHTML = '三等奖';
                }
                // div.childNodes[0].src = this.imgs[i];

                div.id = 'triangle' + i;
                div.style.borderLeftWidth = halfItemWidth;
                div.style.borderRightWidth = halfItemWidth;
                div.style.transform = 'rotate(' + itemAngle * 57.3 * i +'deg)';
                div.style.borderTopColor = (i + 1) % 2 == 0 ? '#888' : '#222';
                // div.style.borderTopColor = this.bgColors[i];
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
            // console.log(self);
            pointerCircle.onclick = function(itself) {
                itself.view.turnplate.fn.fisrtRotationForce();
            }

            pointerBox.appendChild(trianglePointer);
            pointerBox.appendChild(pointerCircle);

            this.container.appendChild(pointerBox);
        },
        /**
         *
         * @param  {Number} [range=100] [description]
         * @return {[type]}             [description]
         */
        godGiveYouLuckyAndGold : function (range = 100) {
            /**
            * 生成的 1 到 100 的随机数
            * @type {Number}
            */
            var randomNum = parseFloat(Math.random() * range) ;


            //  @TODO 下面抽奖策略，目前比较简陋，待优化
            if(randomNum < 5 && randomNum >= 0) {
             this.luckyAndGold = 1
            } else if( ( randomNum >= 20 && randomNum < 25 ) ||
                     ( randomNum >= 40 && randomNum < 45 ) ||
                     ( randomNum >= 60 && randomNum < 65 ) ||
                     ( randomNum >= 80 && randomNum < 85 ) ) {
             this.luckyAndGold = parseInt(randomNum / 20) * 4 + 1 ;
            }else {
             this.luckyAndGold = Math.ceil(randomNum / 5);
            }
            console.log('luckyAndGold' + this.luckyAndGold);

            return this.luckyAndGold;
        },

         /**
          * 令 turnplate 对象旋转的函数
          * @return {void}
          */
         fisrtRotationForce : function() {
             var luckyAndGold = tp.godGiveYouLuckyAndGold();
             console.log(luckyAndGold);
             var deg = 3600 + ( ( 360 / 20 ) * luckyAndGold );
             console.log(this);
             function theGraceOfGod(grace){
                 alert(grace);
             }
            // (function(luckyAndGold){console.log('done');alert(luckyAndGold);})();
            //  setTimeout( theGraceOfGod(luckyAndGold) , 6000 );
            //  setTimeout( "function(luckyAndGold){console.log('done');alert(luckyAndGold);}", 6000 );
            //
            // 参见：<a herf="http://www.cnblogs.com/leon2016/p/5932061.html">链接<a>
            // 另参见：<a herf="http://www.jb51.net/article/40524.htm">链接<a>
            window.setTimeout(function(){
                alert(luckyAndGold);
            }, 6000)
            //  setTimeout( theGraceOfGod, 6000 , luckyAndGold );
             this.turnplate.style.transform = 'rotate(' + deg + 'deg)';
         }

    },

    turnplate.fn.init.prototype = turnplate.fn;

})(window);
