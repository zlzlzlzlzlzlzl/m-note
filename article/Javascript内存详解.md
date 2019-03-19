# Javascript 内存详解

## 简介 
某些语言，比如C有低级的原生内存管理原语，像malloc()和free()。开发人员使用这些原语可以显式分配和释放操作系统的内存。

相对地，JavaScript会在创建变量（对象、字符串）时自动分配内存，并在这些变量不被使用时自动释放内存，这个过程被称为**垃圾回收**。这个“自动”释放资源的特性带来了很多困惑，让JavaScript（和其他高级级语言）开发者误以为可以不关心内存管理。这是一个很大的错误

## 内存生命周期
无论使用什么编程语言，内存生命周期基本是一致的：
![内存生命周期图](https://user-gold-cdn.xitu.io/2019/3/14/1697b3f0d29ec850?w=2180&h=710&f=png&s=87580)

- 分配内存： 内存被操作系统分配，允许程序使用它 （当申明变量、函数、对象的时候，系统会自动为他们分配内存）
- 使用内存：通过在代码操作变量对内在进行读和写 (也就是使用变量、函数等)
- 释放内存：不用的时候，就可以释放内存，以便重新分配 （由垃圾回收机制自动回收不再使用的内存）

## JS 内存模型
在JavaScript中的内存空间分为两种：**栈内存(stack)** 与 **堆内存(heap)**, 而JavaScript的数据类型也分为两大类， 分别是**基本数据类型**和**引用数据类型**。 这些数据类型在内存中是怎样存储的？

```
说是JS内存模型其实不太准确，只是便于理解。由于JavaScript中的内存分配是由js引擎完成的，所以更准确的描述是js引擎的内存模型。
```

### 基础数据类型与栈内存
JS中的基础数据类型，这些值都有固定的大小，往往都保存在栈内存中（闭包除外），由系统自动分配存储空间。我们可以直接操作保存在栈内存空间的值，因此基础数据类型都是按值访问数据在栈内存中的存储与使用方式类似于数据结构中的堆栈数据结构，遵循后进先出的原则。

所熟知的基本类型：
```Javascript
Number、String、Null、Boolean、Undefiend、Symbol(ES6新增)
```

简单理解栈的存取方式，我们可以通过类比乒乓球盒子来分析。如下图左侧。
![栈存取方式](https://upload-images.jianshu.io/upload_images/599584-b12fef30803a0c53.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700/format/webp)

这种乒乓球的存放方式与栈中存取数据的方式如出一辙。处于盒子中最顶层的乒乓球5，它一定是最后被放进去，但可以最先被使用。而我们想要使用底层的乒乓球1，就必须将上面的4个乒乓球取出来，让乒乓球1处于盒子顶层。这就是栈空间**先进后出，后进先出**的特点。

### 引用数据类型与堆内存
与其他语言不同，JS的引用数据类型，比如数组Array，它们值的大小是不固定的。引用数据类型的值是保存在堆内存中的对象。JavaScript不允许直接访问堆内存中的位置，因此我们不能直接操作对象的堆内存空间。在操作对象时，实际上是在操作对象的引用而不是实际的对象。因此，引用类型的值都是按引用访问的。这里的引用，我们可以粗浅地理解为保存在变量对象中的一个地址，该地址与堆内存的实际值相关联。

堆数据结构是一种树状结构。它的存取数据的方式，则与书架与书非常相似。

## 垃圾回收
垃圾回收是一种内存管理机制，就是将不再用到的内存及时释放，以防内存占用越来越高，导致卡顿甚至进程崩溃。在JavaScript中有垃圾回收机制，其作用就是自动回收过期无效的变量。

### 垃圾回收算法

## 内存泄漏
### 4种常见的JavaScript内存泄漏
#### 1. 意外的全局变量
JavaScript用一个有趣的方式管理未被声明的变量：对未声明的变量的引用在全局对象里创建一个新的变量。在浏览器的情况下，这个全局对象是window。
```javascript
function foo(arg) {
  bar = "some text";
}
```
等同于
```javascript
function foo(arg) {
  window.bar = "some text";
}
```
函数 `foo` 内部忘记使用 `var`，意外创建了一个全局变量。在这个例子里，泄漏一个简单的字符串不会造成很大的伤害，但是它确实有可能变得更糟。

另外一个意外创建全局变量的方法是通过`this`:
```javascript
function foo() {
  this.var1 = "potential accidental global";
}

// Foo作为函数调用，this指向全局变量(window)
// 而不是undefined
foo();
```
> 为了防止这些问题发生，可以在你的JaveScript文件开头使用 `'use strict'`；启用严格模式解析JavaScript来阻止意外的全局变量。

除了意外创建的全局变量，明确创建的全局变量同样也很多。这些当然属于不能被回收的（除非被指定为null或者重新分配）。特别那些用于暂时存储数据的全局变量，是非常重要的。如果你必须要使用全局变量来存储大量数据，确保在是使用完成之后为其赋值null或者重新赋其他值。

#### 2. 被遗忘的定时器或者回调

#### 3. 闭包
闭包是JavaScript开发的一个关键方面：一个内部函数使用了外部（封闭）函数的变量。由于JavaScript运行时实现的不同，它可能以下面的方式造成内存泄漏：

```javascript
var theThing = null;

var replaceThing = function () {

  var originalThing = theThing;
  var unused = function () {
    if (originalThing) // 引用'originalThing'
      console.log("hi");
  };

  theThing = {
    longStr: new Array(1000000).join('*'),
    someMethod: function () {
      console.log("message");
    }
  };
};

setInterval(replaceThing, 1000);
```

这段代码做了一件事：每次`ReplaceThing`被调用，`theThing`获得一个包含大数组和新的闭包(`someMethod`)的对象。同时，变量`unused`保持了一个引用`originalThing`(`theThing`是上次调用`replaceThing`生成的值)的闭包。已经有点困惑了吧？最重要的事情是**一旦为同一父域中的作用域产生闭包，则该作用域是共享的**。

这里，作用域产生了闭包， `someMethod`和`unused`共享这个闭包中的内存。`unused`引用了`originalThing`。尽管`unused`不会被使用， `someMethod`可以通过theThing来使用replaceThing作用域外的变量（例如某些全局的）。而且 `someMethod`和`unused`有共同的闭包作用域，`unused`对`originalThing`的引用强制`oriiginalThing`保持激活状态(两个闭包共享整个作用域)。这阻止了它的回收。

当这段代码重复执行，可以观察到被使用的内存在持续增加。垃圾回收运行的时候也不会变小。从本质上来说，闭包的连接列表已经创建了(以theThing变量为根)，这些闭包每个作用域都间接引用了大数组，导致大量的内存泄漏。

[Meteor 的博文](https://blog.meteor.com/an-interesting-kind-of-javascript-memory-leak-8b47d2e7f156) 解释了如何修复此种问题。在 replaceThing 的最后添加 originalThing = null 。

#### 4. DOM外引用

## 参考资料
[内存管理](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)
[前端基础进阶（一）：内存空间详细图解](https://www.jianshu.com/p/996671d4dcc4)
[JavaScript 内存泄漏教程](http://www.ruanyifeng.com/blog/2017/04/memory-leak.html)
[【译】JavaScript是如何工作的：内存管理 + 如何处理4个常见的内存泄露](https://segmentfault.com/a/1190000011411121)
