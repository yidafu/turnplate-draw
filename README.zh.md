# 幸运抽奖

## 介绍

这是一个用HTML，CSS，JS原生实现的，而非使直接用图片或者Canvas实现的抽奖转盘库。

这个项目专为幸运抽奖而生。

## 特色
+   能够自动化生成转盘，通过参数`data`.这意味着你不需要浪费时间去重复编码。
+   这个项目模仿了jQuery。所以，你你能够无`new`地使用它。


## 用法

```javascript
var id = 'turnplateContainer'
var data = [{"name":"一等奖",
                   "num":"5",
                   "probability":"5"，
                   },
                   ...
];

var tp . turnplate({
    id,
    data
});

tp.draw();
```
