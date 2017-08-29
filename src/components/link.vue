<template>
  <div>
    <div></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        count: 0, emit: {},
        path: {},
        payload: {},
      }
    },
    methods: {
      bubble (subscription, page) {
        this.$store.dispatch('bubbleDelegation', { subscription, page });
      },
      register (subscription) {
        this.$store.dispatch('registerCustomer', { register: subscription, page: this });
      },
      request (subscription, payload) {
        this.$store.dispatch('requestCustomer', { request: subscription, payload, page: this });
      },
      redirect (path) {
        this.$nextTick(() => {
          this.$router.push({ path })
        })
      },
    },
    mounted () {
      this.register('redirect');
    },
    watch: {
      count () {
        this.path.to = this.payload.path;
        this.redirect(this.path.to);
      }
    }
  }
</script>