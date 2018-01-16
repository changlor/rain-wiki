## 一个依赖一个收集器
```
const state = {
  param: 'some string...',
  watch: {
    param: [],
  }
}
```
## 渲染一个模板往收集器丢一个依赖
```
const watcher = function () {
  // render template a
}
watcher();
state.watch.param.push(watcher);
```
## 变量改动时，去遍历所有的依赖
```
for (let i = 0; i < state.watch.param.length; i++) {
  state.watch.param[i]();
}
```