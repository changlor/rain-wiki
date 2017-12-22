<template>
  <div id="app">
    <vendor-components class="core"></vendor-components>
    <div class="components">
      <redirect />
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import redirect from './components/link';
  export default {
    components: { redirect }
  }
</script>
<style>
  @import './assets/css/app.css';
  @import './assets/css/icon.css';
  @import './assets/css/btn.css';
  @import './assets/css/hl.css';
  @import './assets/css/md.css';
  @import './assets/css/grid.css';
</style>