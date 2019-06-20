# css显示页面轮廓.md


将其添加到浏览器的控制台，页面上所有元素的轮廓都会显示出来
```
[].forEach.call($$("*"), function(a) {
    a.style.outline =
    "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
});
```
![](https://user-gold-cdn.xitu.io/2019/6/19/16b6e3cf21e21fe3?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)


## 参考文献
[CSS Layout Debugger](https://gist.github.com/addyosmani/fd3999ea7fce242756b1)