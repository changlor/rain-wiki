# 如何实现一个最简单的mvvm
总共有三点
## 模板语法解析
```
const el = document.getElementById('temp');
let param = 'I was rendered by template grammer';
el.innerHTML = inner.replace(/{{(.*?)}}/, function (match) {
  return eval(match.trim());
});
```
## 更新器
```
const updateTemp = function (change) {
  eval(change[0] + ' = ' + change[1]);
  wactcher();
}
```
## 工农结合
```
// 解析器
const el = document.getElementById('temp');
let param = 'I was rendered by template grammer';
const watcher = function () {
  el.innerHTML = inner.replace(/{{(.*?)}}/, function (match) {
    return eval(match.trim());
  });
}
// 更新器
const updater = function (change) {
  eval(change[0] + ' = ' + change[1]);
  watcher();
}

// 结合
updater(['param', 'Are you ok?']);
<div id="temp">Are you ok?</div>
```