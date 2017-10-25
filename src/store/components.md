# 组件加载
#### 由于此项目为移动端项目，需要对移动端进行适配
从组件库中下载ComponentsMobile，放入根目录下components目录内
#### 引入ComponentsMobile组件
> 引入组件的写法为import component from 'path/to/component'，并在components中注册

在根目录中修改App.vue如下
```html
<template>
  <div id="app">
    <div class="vendor-components">
      <Components-Mobile />
    </div>
    <vendor-components class="core"></vendor-components>
    <router-view></router-view>
  </div>
</template>
<script>
  import { ComponentsMobile } from './components/ComponentsMobile';

  export default {
    components: { ComponentsMobile },
  }
</script>
```
此时页面已经对移动端进行了适配
#### 引入PublicHeader公有组件
从组件库中下载PublicHeader组件，放入components目录内，并在根目录exercises中修改record.vue如下
```
<template>
  <div>
    <PublicHeader title="模拟练习册" />
  </div>
</template>
<script>
  import PublicHeader from '../../components/PublicHeader';

  export default {
    components: { PublicHeader }
  }
</script>
```
此时页面已经更新，并显示了标题

#### 引入PublicItems公有组件
根目录下，修改exercises/record.vue为
```
<template>
  <div>
    <!-- paid exercises -->
    <PublicHeader title="模拟练习册" />
    <div class="tag">
      <div class="content font18">
        已购模拟
      </div>
    </div>
    <PublicItems :payload="exercises.paid">
      <!-- unselected item -->
      <div slot-scope="props" class="item df center link" slot="item">
        <div class="f1">
          <div class="font16 cr333">{{ props.item.exercisesName }}</div>
          <div class="font12 cr999">{{ props.item.exercisesNumber }}道题</div>
        </div>
        <div class="df center font14">
          <span class="cr999">已练{{ props.item.exercisesCount }}次</span><i class="fa-icon fa-arrow-right"></i>
        </div>
      </div>
    </PublicItems>
    <!-- free exercises -->
    <div class="tag">
      <div class="content font18">
        免费模拟
      </div>
    </div>
    <PublicItems :payload="exercises.free">
      <!-- unselected item -->
      <div slot-scope="props" class="item df center link" slot="item">
        <div class="f1">
          <div class="font16 cr333">{{ props.item.exercisesName }}</div>
          <div class="font12 cr999">{{ props.item.exercisesNumber }}道题</div>
        </div>
        <div class="df center font14">
          <span class="cr999">已练{{ props.item.exercisesCount }}次</span><i class="fa-icon fa-arrow-right"></i>
        </div>
      </div>
    </PublicItems>
  </div>
</template>
<script>
  import PublicHeader from '../../components/PublicHeader';
  import PublicItems from '../../components/PublicItems';

  export default {
    data () {
      return {
        exercises: {
          free: [
            { exercisesName: '官方免费模拟题（0）', exercisesNumber: 100, exercisesCount: 0 },
          ],
          paid: [
            { exercisesName: '官方辅导模拟题（0）', exercisesNumber: 100, exercisesCount: 3 },
            { exercisesName: '官方辅导模拟题（1）', exercisesNumber: 100, exercisesCount: 3 },
          ],
        }
      }
    },
    components: { PublicHeader, PublicItems },
  }
</script>
<style scoped>
  .item {
    padding: .4rem;
    border-bottom: 1px solid #ececec;
  }
  .item:active {
    background-color: #eee;
  }
  .item .fa-icon {
    width: .16rem;
    height: .32rem;
    margin-left: .28rem;
    background-size: .16rem .32rem;
  }
  .tag {
    padding: .4rem;
    padding-left: 0;
  }
  .tag .content {
    border-left: .08rem solid #69b8ff;
    padding-left: .32rem;
  }
</style>
```
此时页面已经基本成型，接下来需要为其添加交互