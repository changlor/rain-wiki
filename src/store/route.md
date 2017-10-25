# 路由配置
#### 准备工作
```shell
# 定位到你的项目目录
cd path-to-your-object
# 定位到项目src，以下所有的文件根目录都在此之下
cd src
```
#### 新建一个文件
```shell
# 新建一个文件目录
mkdir views/exercises
# 新建一个文件
touch views/exercises/record.vue
```
#### 新增一个路由
> routes中的key和value，分别代表url和页面的相对路径

在根目录config中修改router.js如下
```javascript
export default {
  routes: {
    'exercises/record': 'exercises/record',
  }
}
```
此时访问/exercises/record，即为record页内容，现在来写record页
