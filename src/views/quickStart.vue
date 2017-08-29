<template>
  <div>
    <banner />
    <div class="container">
      <ul class="nav cr666 font14">
        <li><span class="font16 bold" @click="page(3)"># 快速开始</span></li>
        <li><span @click="page(2)">搭建你的第一个路由</span></li>
        <li><span @click="page(1)">借助事件响应页面</span></li>
        <li><span @click="page(0)">如何加载css和js，以及tips</span></li>
        <li><span>如何跳转页面</span></li>
      </ul>
      <div class="wiki">
        <div class="rain-markdown" v-html="md(doc)" v-if="doc != ''"></div>
        <div class="empty font24 crForgive" v-if="doc == ''">
          Pages are loading...
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Func } from '../vendor/lib';
  import banner from '../components/header';
  export default {
    data () {
      return {
        docs: [],
        doc: '',
        isReady: false,
      }
    },
    methods: {
      request (subscription, payload) {
        this.$store.dispatch('requestCustomer', { request: subscription, payload, page: this });
      },
      md (str) {
        return Func.parseMarkdown(str);
      },
      page (index) {
        if (!this.isReady) {
          return false;
        }
        this.doc = this.docs[index].body;
      }
    },
    components: {
      banner
    },
    mounted () {
      fetch('https://api.github.com/repos/changlor/rain-wiki/issues')
      .then((res) => res.json())
      .then((res) => {
        this.docs = res;
        this.isReady = true;
      })
    }
  }
</script>
<style scoped>
  .container {
    display: flex;
    padding: 0 120px;
  }
  .nav {
    min-width: 150px;
    padding: 40px;
    width: 20%;
  }
  .wiki {
    flex: 1;
    padding: 20px 0;
  }
  .rain-markdown, .empty {
    box-sizing: border-box;
    overflow-y: scroll;    
    padding-right: 20px;
    height: 630px;
  }
  .empty {
    display: flex;
    justify-content: center;
    padding-top: 150px;
    background-color: #eee;
  }
  .nav li {
    list-style: none;
    padding: 5px;
    border-bottom: 1px dashed #ddd;
    transition: border .3s ease-in-out;
  }
  .nav li:hover {
    color: #999;
    border-bottom: 1px dashed #4fc08d;
  }
</style>
