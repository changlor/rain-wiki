<template>
  <div :style="isFocus ? 'border: 1px solid #4fc08d;' : ''" class="search dfcenter cr666">
    <i class="fa-icon fa-search"></i>
    <input class="font14" @focus="insert" @blur="modify" />
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isFocus: false,
      }
    },
    methods: {
      insert () {
        this.isFocus = true;
      },
      modify () {
        this.isFocus = false;
      }
    }
  }
</script>
<style scoped>
  input {
    outline: none;
    border: 0;
    padding: 0 10px;
  }
  .search {
    border: 1px solid #ddd;
    border-radius: 20px;
    padding: 5px 10px;
    margin-right: 30px;
    overflow: hidden;
    transition: border .3s ease-in-out;
  }
  .fa-search {
    width: 15px;
    height: 15px;
    background-size: 15px 15px;
  }
</style>