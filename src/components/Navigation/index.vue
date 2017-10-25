<template>
  <div class="access-token-class-components-Navigation">
    <!-- for pc -->
    <div class="content pc cr666 font14" v-if="device == 'pc'">
      <div class="index" :is="indexComponent"></div>
    </div>
    <!-- for pad -->
    <div class="content pad cr666 font14" v-if="device == 'pad'">
      <div class="index" :is="indexComponent"></div>
    </div>
  </div>
</template>
<script>
  import { Func } from '../../vendor/lib';
  import processor from './processor';
  import onloaded from './onloaded';

  export default {
    data () {
      return {
        res: '', indexComponent: '',
      }
    },
    methods: {
      md (str) {
        return Func.parseMarkdown(str);
      },
    },
    props: ['payload', 'device'],
    mounted () {
      this.$model(`renderTreeToIndexdevice${this.device}`, { processor, onloaded });
    }
  }
</script>
<style scoped>
  .content {
    min-width: 140px;
    width: 100%;
    padding-left: 0;
    display: flex;
  }
  .index {
    width: 100%;
  }
  .access-token-class-components-Navigation {
    display: flex;
  }
  @import './navigation.css';
</style>