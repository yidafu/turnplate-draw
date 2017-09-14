# 幸运抽奖

## 介绍

这是一个用HTML，CSS，JS原生实现的，而非使直接用图片或者Canvas实现的抽奖转盘库。

这个项目专为幸运抽奖而生。

## 特色
+   能够自动化生成转盘，通过参数`data`.这意味着你不需要浪费时间去重复编码。
+   转盘是通过 DOM 操作自动生成的，你不必层层嵌套的 div，只需要传入一个容器 ID 就够了。
+   这个项目模仿了jQuery。所以，你你能够无`new`地使用它。


## 用法

```html

<div id="turnplateContainer"></div>

<script>
var id = 'turnplateContainer'
var data = [{"name":"一等奖",
                   "num":"5",
                   "probability":"5"，
                   },
                   ...
];
// 这个函数将在转盘旋转结束以后执行主要用于回传结果数据。
// 示例如：
function func() {
    $.ajax({
        url : '',
        data: turnplate.fn.winning,
        type: 'POST',
        dataType: 'json',
        success: function () {
            // @TODO
        },
        error: function () {
            // @TODO
        }
    })
}
var tp . turnplate({id,
                    data,
                    func
                  });

tp.draw();
</sctipt>
```
