<template>
  <div>
    <Banner />
    <div class="container">
      <!-- for phone -->
      <div class="wiki row kit-contrast-hidden-mb kit-max-mb">
        <section class="col-tb-12">

        </section>
      </div>
      <!-- for pad -->
      <div class="wiki row kit-contrast-hidden-tb kit-hidden-mb pad">
        <section class="col-tb-12">
          <Navigation class="navigation" :payload="items" device="pad" />
          <Items class="items" :payload="items" device="pad" />
        </section>
      </div>
      <!-- for pc -->
      <div class="wiki row kit-hidden-tb">
        <section class="col-tb-3 ">
          <Navigation :payload="items" device="pc" />
        </section>
        <section class="col-tb-9 kit-hidden-tb">
          <Items :payload="items" device="pc" />
        </section>
      </div>
    </div>
  </div>
</template>
<script>
  import { Func } from '../vendor/lib';
  import Banner from '../components/header';
  import Navigation from '../components/Navigation';
  import Items from '../components/Items';
  
  export default {
    data () {
      return {
        docs: [],
        doc: '',
        isReady: false,
        items: {
          delegation: 'selectMarkdown',
          res: {
            mac: {
              parent: null,
              child: {
                terminal: {
                  parent: 'mac',
                  child: null,
                  name: 'Iterm2-多个终端',
                },
              },
              name: 'Mac',
            }
          },
          index: 'mac',
        },
      }
    },
    components: {
      Banner, Navigation, Items
    },
    mounted () {

    }
  }
</script>
<style scoped>
  .wiki {
    padding: 20px 0;
  }
  .pad .navigation {
    margin-bottom: 30px;
  }
</style>
