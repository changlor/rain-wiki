# 所以如何实现一个mvvm框架呢
_一开始就实现一个功能齐全的mvvm框架式是不现实的_
而把mvvm拆成一个一个的模块，最后组装起来，就会容易的多
~~走农村包围城市才是正道~~
## 万里长征第一步，渲染一个模板语法
目标
- 设计一个模板语法
- 能将模板语法解析成真实dom

```
const param = 'I was rendered by template grammer';
<div id="temp">{{ param }}</div>

// 第一步，获取节点
const el = document.getElementById('temp');
let inner = el.innerHTML;
// 正则替换一下，这里用了eval(邪恶的函数)
el.innerHTML = inner.replace(/{{(.*?)}}/, function (match) {
  return eval(match.trim());
});

// 然后结果就被显示出来了
<div id="temp">I was rendered by template grammer</div>
```

## 从更新函数开始
模板语法已经可以成功的渲染了，现在的问题就在于，如何让渲染之后的模板，能自动的因变量的更新而更新

这里的思想为，当变量变动时，重新执行一遍上面的操作
问题就在于如何去获取变量的改动
- 第一种，也是最常用的defineProperty，劫持对象上属性的setter，当属性变动时，触发setter
- 第二种，es6的Proxy，原理和上面差不多
- 第三种，脏检查，这个太耗性能
- 第四种，~~不造自己的轮子，和咸鱼有什么区别~~，也是我的框架所使用的

### 更新函数
如何不通过defineProperty和Proxy也能劫持变量的改动

其实很简单
```
const updater = function (change) {
  eval(change[0] + ' = ' + change[1]);
  // some logic code...
}
```
整个的过程如下
```
// 将上面的代码封装成函数
const el = document.getElementById('temp');
let param = 'I was rendered by template grammer';
const updater = function (change) {
  eval(change[0] + ' = ' + change[1]);
  updateTemp();
}

const updateTemp = function () {
  el.innerHTML = inner.replace(/{{(.*?)}}/, function (match) {
    return eval(match.trim());
  });
}

updater(['param', 'Are you ok?']);

// 视图就轻而易举的变改变成了
<div id="temp">Are you ok?</div>
```
而中间的过程全部由框架隐藏了，用户不需要去理会中间到底做了什么