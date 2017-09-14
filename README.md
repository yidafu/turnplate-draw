# turnplate-draw

## Introduction

A turnplate-draw by HTML, CSS, JS, and without using picture or canvas.

This project is to make a turnplate for lucky draw.

## Feature

+   It can aotumaticly make the turnplate by the params `data`. It means that you never need to waste your time to coding again.
+   This project mimic jQuery. So you can use it without `new`.

## Usage

my goal is that you can simplely using it as can as posible. **like:**

```javascript
var listOfItem = [
    itemName: probability,
    ...
];

var config = {
    bgColor: [...],
    count: 10;// 转盘块数
    ...
}

var tp . turnplate({
    listOfItem,
    config
});

tp.drew();
```
