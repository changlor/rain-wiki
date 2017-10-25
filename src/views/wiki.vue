<template>
  <div>
    <Banner />
    <div class="container">
      <div class="main">
        <div class="title font28">欢迎使用rain框架快速搭建项目</div>
        <div class="meta font16 dfcenter">
          <span
            class="btn link primary crfff">
            我的博客
          </span>
          <span class="placeholder"></span>
          <span
            class="btn link contrast crForgive"
            @click="$request('redirect', { path: 'quickStart' })">
            快速开始
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Banner from '../components/header';

  export default {
    components: {
      Banner
    },
  }
</script>
<style scoped>
  .title {
    text-align: center;
  }
  .container {
    text-align: center;
  }
  .main {
    margin-top: 140px;
    display: inline-block;
    padding-bottom: 20px;
    border-bottom: 1px dashed #666;
  }
  .meta {
    margin-top: 30px;
    text-align: center;
    flex-direction: row-reverse;
  }
  span {
    margin: 5px;
  }
</style>