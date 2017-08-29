<template>
  <div class="header dfcenter cr666 font15">
    <div class="logo font18">Rain.js</div>
    <div class="space"></div>
    <search />
    <div class="nav dfcenter">
      <span class="link">教程</span>
      <span class="link">API</span>
      <span class="link">示例</span>
    </div>
  </div>
</template>
<script>
  import search from './search';

  export default {
    components: {
      search,
    }
  }
</script>
<style>
  .header {
    padding: 10px 50px;
    height: 40px;
    box-shadow: 0 0 10px hsla(0, 0%, 5%, .1);
  }
  .nav span {
    margin: 0 10px;
  }
</style>
