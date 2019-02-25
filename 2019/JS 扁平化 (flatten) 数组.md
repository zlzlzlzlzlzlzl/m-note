# JS 扁平化 (flatten) 数组

## 前言
数组是 JS 中使用频率仅次于对象的数据结构，官方提供了众多的 API，谈谈如何扁平化（flatten）数组。

**数组的扁平化，是将一个嵌套多层的数组 array (嵌套可以是任何层数)转换为只有一层的数组**


### flat
flat(depth) 方法会递归到指定深度将所有子数组连接，并返回一个新数组, depth指定嵌套数组中的结构深度，默认值为1，不管多少层则可以用Infinity关键字作为参数

```javascript
[1, 2, [3]].flat(1) // [1, 2, 3]

[1, 2, [3, [4]]].flat(2) // [1, 2, 3, 4]

[1, 2, [3, [4, [5]]]].flat(Infinity) // [1, 2, 3, 4, 5]
```
==flat()有兼容性问题， 不建议使用==

### reduce

```javascript
function flatten(arr) {
  return arr.reduce((a, b) => {
    // return Array.isArray(b) ? a.concat(flatten(b)) : a.concat(b);
    return a.concat(Array.isArray(b) ? flatten(b) : b);
  }, []);
};

// es6
const flatten = arr =>
  arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);


flatten([1,[2,3],4,[[5,6],7]])  // [1, 2, 3, 4, 5, 6, 7]
```



### toString
只适于数组的元素都是数字

```javascript
function flatten(arr) {
  return arr.toString().split(",").map(item => +item);
};


flatten([1,[2,3],4,[[5,6],7]])  // [1, 2, 3, 4, 5, 6, 7]
```


### [].concat(...arr)

```javascript
function flatten(arr) {
  return !Array.isArray(arr) ? arr : [].concat.apply([], arr.map(flatten));
}


flatten([1,[2,3],4,[[5,6],7]])  // [1, 2, 3, 4, 5, 6, 7]
```

### generator

```javascript
function* flatten(arr) {
  if (!Array.isArray(arr)) yield arr;
  else for (let el of arr) yield* flatten(el);
}

let flattened = [...flatten([1,[2,[3,[4]]]])];  // [1, 2, 3, 4]
```

### 字符串过滤

将输入数组转换为字符串并删除所有括号（[]）并将输出解析为数组
```javascript
const flatten = arr => JSON.parse(`[${JSON.stringify(arr).replace(/\[|]/g,'')}]`);
```

### undercore or lodash 库
使用undercore库或者lodash的中_.flatten函数，具体用法查阅API文档
```
_.flatten([1, [2], [3, [[4]]]]);
=> [1, 2, 3, 4];
```



## 参考文献
实现扁平化（flatten）数组的方法还有很多种，可以参考一下文献
1. [javascript-flattening-an-array-of-arrays-of-objects](https://stackoverflow.com/questions/29158723/javascript-flattening-an-array-of-arrays-of-objects) 

2. [merge-flatten-an-array-of-arrays-in-javascript](https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays-in-javascript)