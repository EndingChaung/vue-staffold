<template lang="pug">
#app
  router-view
</template>

<script>
export default {
  name: 'app',
  watch: {
    $route() {
      document.title = '尽道在线签章系统';
    },
  },
};
</script>

<style lang="stylus">
@import './assets/styles/global.styl'

#app
  font-family PingFangSC-Regular, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  overflow auto
  height 100%

@media print
  #app
    height unset
</style>
