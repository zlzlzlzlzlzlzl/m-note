# 浅拷贝VS深拷贝
## 简介
### 浅拷贝
浅拷贝是复制基本数据类型（如数字和字符串），但不会以递归方式复制任何对象引用，而是新复制的对象将引用同一对象。

**浅拷贝例子**
```javascript
const original = {
  a: 10,
  arr: { name: '稻草叔叔🤠'}
}

// 浅拷贝
const copyObj = shallowCopy(original)
copyObj.a = 20;
copyObj.b.name = '稻草哥哥😎'
console.log(original)  // { a: 10, b: { name: '稻草哥哥😎' } }
console.log(copyObj)  // { a: 20, b: { name: '稻草哥哥😎' } }
```

### 深拷贝
深复制则不同，它不仅将原对象的各个属性逐个复制出去，而且将原对象各个属性所包含的对象也依次采用深复制的方法递归复制到新对象上。


**浅拷贝例子**
```javascript
const original = {
  a: 10,
  b: { name: '稻草叔叔🤠'}
}

// 深拷贝
const copyObj = shallowCopy(original)
copyObj.a = 20;
copyObj.b.name = '稻草哥哥😎'
console.log(original)  // { a: 10, b: { name: '稻草叔叔🤠' } }
console.log(copyObj)  // { a: 20, b: { name: '稻草哥哥😎' } }
```
> 简单来说，浅复制只复制一层对象的属性，而深复制则递归复制了所有层级。

## 拷贝方式
### 简单版拷贝
```javascript
// 浅拷贝
function shallowCopy(target) {
  let dst = Array.isArray(target) ? [] : {}
  for (var key in target) {
    if (target.hasOwnProperty(key)) {
      dst[key] = target[key]
    }
  }
  return dst
}
```

### Array 拷贝
**浅复制: spread...运算符 or concat or slice**
```javascript
[...array]  // spread...运算符
[].concat(array)  // concat
array.slice()  // slice
```

```javascript
let array = [1, 2, 3];
let arrayCopy = [...array];

arrayCopy[0] = '👻';
console.log(arrayCopy); // [ '👻', 2, 3 ]
// ✅ Original NOT affected 
console.log(array); // [ 1, 2, 3 ]
```
> spread... or concat or slice 只是对数组的第一层进行拷贝。

**深复制: 使用递归**
```javascript
const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);

let nestedArray = [1, [2], 3];
let arrayCopy = clone(nestedArray);

// Make some changes
arrayCopy[0] = '👻'; // change shallow element
arrayCopy[1][0] = '💩'; // change nested element
console.log(arrayCopy); // [ '👻', [ '💩' ], 3 ]
// ✅ Nested array NOT affected
console.log(nestedArray); //  1, [ 2 ], 3 ]
```

**深复制: JSON.stringify/parse**
```javascript
function nestedCopy(array) {
  return JSON.parse(JSON.stringify(array));
}
// all Number type
nestedCopy([1, [2], 3]) // -> [1, [2], 2]
// undefineds are converted to nulls
nestedCopy([1, undefined, 2]) // -> [1, null, 2]
// DOM nodes are converted to empty objects
nestedCopy([document.body, document.querySelector('p')]) // -> [{}, {}]
// JS dates are converted to strings
nestedCopy([new Date()]) // -> ["2019-03-04T10:09:00.419Z"]
```

> 上面所看，JSON.stringify / parse仅适用于Number和String以及Object literal而不使用函数或Symbol属性。

### Object 拷贝
**浅复制： Object.assign()**
Object.assign() 是对对象浅复制, 而不是深复制.
```javascript
const original = {
  name: 'Fiesta',
  car: {
    color: 'blue'
  }
}
const copied = Object.assign({}, original)

original.name = 'Focus'
original.car.color = 'yellow'

copied.name //Fiesta
copied.car.color //yellow
```

**浅复制: spread...运算符**
```javascript
const copied = { ...original }
```

**深复制: JSON.stringify/parse**
```javascript
 JSON.parse(JSON.stringify(object));
```

> 上面所看，JSON.stringify / parse仅适用于Number和String以及Object literal而不使用函数或Symbol属性。


### Lodash库
使用Lodash库提供的浅拷贝（**clone**）和深拷贝（**clonedeep**）函数

```javascript
const clone = require('lodash.clone')
const clonedeep = require('lodash.clonedeep')

const externalObject = {
  color: 'red'
}

const original = {
  a: new Date(),
  b: NaN,
  c: new Function(),
  d: undefined,
  e: function() {},
  f: Number,
  g: false,
  h: Infinity,
  i: externalObject
}

const cloned = clone(original)

externalObject.color = 'blue'

console.info('⬇ shallow cloning 🌈')
console.info(
  '✏ Notice the i.color property we changed on original is also changed in the shallow copy'
)
console.log(original)
console.log(cloned)

const deepcloned = clonedeep(original)

externalObject.color = 'yellow'
console.log('')
console.info('⬇ deep cloning 🌈')
console.info('✏ Notice the i.color property does not propagate any more')
console.log(original)
console.log(deepcloned)
```

## 总结

## 参考链接
[js 深拷贝 vs 浅拷贝 (掘金)](https://juejin.im/post/59ac1c4ef265da248e75892b)
[javascript中的深拷贝和浅拷贝？(知乎)](https://www.zhihu.com/question/23031215)
[How to deep clone a JavaScript object](https://flaviocopes.com/how-to-clone-javascript-object/)

