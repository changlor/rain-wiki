# 依赖收集
考虑以下的情况
```
const param = 'some string...';
<div>
  <a>{{ param }}</a>
  <a>{{ param }}</a>
</div>
```
显然不可能去渲染div，假如div中间混着非常多的小的节点，那为了更新一个变量，就会把里面的全部节点都渲染一遍，消耗的代价是非常大的
## 改进的办法
```
// 将两个子节点单独的渲染
const els = document.querySelectorAll('a');
for (let i = 0; i < els.length; i++) {
  el = els[i];
  el.innerHTML = inner.replace(/{{(.*?)}}/, function (match) {
    return eval(match.trim());
  });
}
```
带有更新器的写法
```
const els = document.querySelectorAll('a');
const updateTemp = function (change) {
  eval(change[0] + ' = ' + change[1]);
  watcher();
}
const watcher = function () {
  el.innerHTML = inner.replace(/{{(.*?)}}/, function (match) {
    return eval(match.trim());
  });
}
for (let i = 0; i < els.length; i++) {
  el = els[i];
  updateTemp();
}
```
这样做也会有很大的问题，当某个小的节点变化时，需要去循环大的节点，也是非常消耗性能的
## 更加好的做法
_为了减少遍历的次数，减少大量的消耗性能的dom操作，让更新器和变量绑定_
具体做法如下
```
const state = {
  param: 'some string',
  watch: {
    param: [],
  }
};

const els = document.querySelectorAll('a');
const updateTemp = function (change) {
  eval(change[0] + ' = ' + change[1]);
  watcher();
}
const watcher = function () {
  el.innerHTML = inner.replace(/{{(.*?)}}/, function (match) {
    return eval(match.trim());
  });
}
for (let i = 0; i < els.length; i++) {
  el = els[i];
  watcher();
  // 将变化的依赖收集保存在数组中
  state.param.push(watcher);
}

// 当检测到param变量变化之后
for (let i = 0; i < state.param.length; i++) {
  // 将所有依赖执行
  state.param[i]();
}
```
## 举一个更复杂的例子
```
const state = {
  paramA: 'I am param a',
  paramB: 'I am param b',
  watch: {
    paramA: [],
    paramB: [],
  }
}

// 节点为
<div>
  <p>{{ paramA }}</p>
  <p>{{ paramA }}</p>
  <a>{{ paramB }}</a>
</div>
```
渲染后的结构为
```
<div>
  <p>I am param a</p>
  <p>I am param a</p>
  <a>I am param b</a>
</div>

// state中的watch为
watch = {
  paramA: [funcRenderFirstP, funcRenderSecondP],
  paramB: [funcRenderFirstA],
}
```
这里就很清晰了
- 假设我修改了变量paramA为'I am not param A'
- 执行funcRenderFirstP，结果为
```
<div>
  <p>I am not param a</p>
  <p>I am param a</p>
  <a>I am param b</a>
</div>
```
- 再执行funcRenderSecondP，结果为
```
<div>
  <p>I am not param a</p>
  <p>I am not param a</p>
  <a>I am param b</a>
</div>
```

这就是依赖收集