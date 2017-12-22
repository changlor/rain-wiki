# 事件交互
#### 派发selectexercisesrecord事件
> 由于数据需要请求服务器，对于这类交互，使用$bubble(someevent)处理

在根目录下，修改test/record.vue为
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
        exercises: {}
      }
    },
    components: { PublicHeader, PublicItems },
    mounted () {
      this.$bubble('selectexercisesrecord');
    }
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
此时控制台会打印一条事件，selectexercisesrecord，不过由于没有被订阅，因而不会被处理
#### 引入事件库Parent
从事件库中引入Parent控制器，放入根目录下model内
#### 新建控制器
在根目录下，新建控制器model/Exercises.js，并修改为
```
import Parent from './Parent';

class Exercises {
  static selectExercisesRecord (page, component, id) {
    Parent.get('/exercises/getRecord')
    .then((res) => {
      page.exercises = res;
      component.resolve(id);
    });
  }
}

export default Exercises;

```
#### 将开发环境设置为dev
在根目录/config中修改debug.js为
```
const debug = {
  isDev: true,
}
export default debug;
```
#### 模拟接口返回假数据
在根目录mock下新建文件exercises.js并修改为
```
const Exercises = {
  getRecord: '{"free":[{"exercisesName":"官方免费模拟题（0）","exercisesNumber":100,"exercisesCount":0}],"paid":[{"exercisesName":"官方辅导模拟题（0）","exercisesNumber":100,"exercisesCount":3},{"exercisesName":"官方辅导模拟题（1）","exercisesNumber":100,"exercisesCount":3}]}',
};

export default Exercises;
```
#### 订阅一条事件
修改根目录下config/model.js为
```
export default {
  models: ['Exercises'],
  subscriptions: {
    selectexercisesrecord: {
      Exercises: 'selectExercisesRecord',
    }
  }
}

```
重启服务，ctrl+c&npm run dev，此时页面已经成功响应