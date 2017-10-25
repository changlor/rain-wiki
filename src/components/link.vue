<template>
  <div>
    <div></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        emit: {}, path: {},
      }
    },
    methods: {
      redirect (path) {
        this.$nextTick(() => {
          this.$router.push({ path })
        })
      },
    },
    mounted () {
      this.$register('redirect')
      .then((payload) => {
        this.path.to = payload.path;
        this.redirect(this.path.to);
      })
    },
  }
</script>