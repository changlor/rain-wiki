<template>
  <div class="access-token-class-components-Items">
    <!-- for pc -->
    <div class="content pc" v-if="device == 'pc'">
      <div class="rain-markdown" v-html="md(item)"></div>      
    </div>
    <!-- for pad -->
    <div class="content pad" v-if="device == 'pad'">
      <div class="rain-markdown" v-html="md(item)"></div>      
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
        items: {},
        item: '',
      }
    },
    props: ['payload', 'device'],
    methods: {
      md (str) {
        return Func.parseMarkdown(str);
      },
    },
    mounted () {
      this.$model(`${this.payload.delegation}device${this.device}`, { processor, onloaded });
      this.$register('switchItem')
      .then((payload) => {
        this.item = this.items[payload.itemName];
      })
    }
  }
</script>
<style scoped>
  .access-token-class-components-Items {
    display: flex;
  }
  .content {
    -webkit-box-shadow: inset 0 0 8px #ccc;
            box-shadow: inset 0 0 8px #ccc;
    border-radius: 2px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 30px;
    padding-top: 0;
    background-color: #fafafa;
    width: 100%;
    height: 600px;
    overflow: scroll;
  }
  .rain-markdown {
    width: 100%;
  }
</style>