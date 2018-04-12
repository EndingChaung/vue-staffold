<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'HomeLayout',
  components: {
    NavBar,
  },
  computed: {
    keepAliveInclude() {
      return [
        'login__index',
      ];
    },
    keepAliveExclude() {
      return [];
    },
  },
};
</script>

<template lang="pug">
.application
  nav-bar.header
  .main-content
    transition
      keep-alive(:include="keepAliveInclude", :exclude="keepAliveExclude")
        router-view
</template>

<style lang="stylus" scoped>
.application
  height 100%
  width 100%
  padding-top 56px
  box-sizing border-box
  overflow hidden
  .header
    position fixed
    top 0
    left 0
    width 100%
  .main-content
    box-sizing border-box
    width 100%
    height 100%
    overflow auto
    padding 16px
</style>
