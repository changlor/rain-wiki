# 数据驱动
简而言之就是，改变页面不再去dom操作，而是去通过改变数据，（中间dom操作交给框架）来更新视图
```
// 页面全部通过数据来渲染
const data = {
  title: '测试',
  notice: '您正在使用mvvm强力驱动网站',
  isLoading: false,
};
<head>{{ title }}</head>
<div if="isLoading">
  {{ notice }}
</div>
<div if="!isLoading">
  页面加载中···
</div>
```
渲染出来的结果是
```
<head>测试</head>
<div>
  页面加载中···
</div>
// 当页面加载完成后，只需要改变isLoading，就会自动更新为
data.isLoading = true;
<head>测试</head>
<div>
  您正在使用mvvm强力驱动网站
</div>
```
简单如斯

## 为什么要使用数据驱动（mvvm
~~人生苦短，我选mvvm~~
当页面存在较多的数据渲染，而硬核（不可替代的）dom操作比较少时，可以考虑使用mvvm
