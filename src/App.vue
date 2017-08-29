<template>
  <div id="app">
    <router-view></router-view>
    <vendor-components class="core"></vendor-components>
    <div class="components">
      <redirect />
    </div>
  </div>
</template>
<script>
  import redirect from './components/link';
  export default {
    components: {
      redirect
    }
  }
</script>
<style>
  @import './assets/css/app.css';
  @import './assets/css/icon.css';
  @import './assets/css/btn.css';
</style>