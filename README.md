# turnplate-draw

## Introduction

A turnplate-draw by HTML, CSS, JS, and without using picture or canvas.

This project is to make a turnplate for lucky draw.

## Usage

my goal is that you can simplely using it as can as posible. **like:**

```javascript
var id = 'turnplateContainer';
var data = [{   name    : 'String',
                img     : 'String',
                bgColor : 'String',
                surplus : 10
            },
            {   name    : 'String1',
                img     : 'String1',
                bgColor : 'String1',
                surplus : 11
            }];

var config = {
    bgColor: [...],
    count: 10;// 转盘块数
    ...
}

new turnplate({ id, data, config });

```

## Future
+   Write with pure JS. NO dependece.
+   Maybe, I will implement it on `vue.js`.
