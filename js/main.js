function turnplate() {
    /**
     * 转盘容器
     * @type {Object}
     */
    this.container = document.getElementById('container');
    this.turnplate = document.createElement('div');

    this.init = function(num) {
        this.drawTurnplate(num);
        this.drawTrianglePointer();
    }

    this.drawTrianglePointer = function() {
        var pointerBox = document.createElement('div');
        pointerBox.id = 'pointerBox';

        var trianglePointer = document.createElement('div');
        trianglePointer.id = 'trianglePointer';
        pointerBox.appendChild(trianglePointer);

        var pointer = document.createElement('div');
        pointer.id = 'pointer';
        pointerBox.appendChild(pointer);

        this.container.appendChild(pointerBox);
    }

    this.drawTurnplate = function(num =  8) {
        // @TODO 参数后期再封装
        // 转盘容器
        /**
         * 转盘容器
         * @type {object}
         */
        var turnplate = this.turnplate;
        // console.log('in line 17');
        // console.log(turnplate);
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
        // console.log('in line 33:');
        // console.log(itemAngle);
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
         * 存放转盘三角形子块的数组,没必要
         * @type {Array}
         */
        var triangles  = [];
        /**
         * 初始化转盘三角子块
         * @type {object}
         */
        var initItem = document.createElement('div')
        triangles[0] = initItem;

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


        initItem.style.borderLeftWidth = halfItemWidth + 'px';
        initItem.style.borderRightWidth = halfItemWidth + 'px';
        initItem.style.borderTopColor = '#eee';

        // @FIXME 这里的值不对
        initItem.style.left = turnplateRadius - halfItemWidth + 'px';

        // 制造其他三角形子块，并旋转 itemAngle 度
        for ( var i = 0 ; i < count ; i ++ ) {
            // console.log(itemAngle);
            triangles[i] = initItem.cloneNode(true);

            // console.log(triangles[i]);
            triangles[i].childNodes[1].innerHTML = 'i='+ (20 - i);

            var div = triangles[i];
            div.id = 'triangle' + i;
            div.style.borderLeftWidth = halfItemWidth;
            div.style.borderRightWidth = halfItemWidth;
            div.style.transform = 'rotate(' + itemAngle * 57.3 * i +'deg)';
            console.log(div.style.transform);
            div.style.borderTopColor = (i + 1) % 2 == 0 ? '#888' : '#222';
            turnplate.appendChild(div);
        }
        // triangles[1].style.zIndex = 1;
        this.turnplate.id = 'turnplate';
        // var p = document.createElement('p')
        // p.innerHTML = "中"
        // this.turnplate.appendChild(p)
        this.container.appendChild(this.turnplate);
        // triangles[19].innerHTML = '测试';
    };

    this.godGiveYouLuckyAndGold = function (range = 100) {
        /**
         * 生成的 1 到 100 的随机数
         * @type {Float}
         */
        var randomNum = parseFloat(Math.random() * range) ;
        /**
         * 这是你的幸运与黄金
         * @type {int}
         */
        var luckyAndCold = 0;
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

    this.rotate = function() {
        console.log('dome');
        var deg = 3600 + tp.godGiveYouLuckyAndGold();
        this.turnplate.style.transform = 'rotate(' + deg + 'deg)';
    }
}
