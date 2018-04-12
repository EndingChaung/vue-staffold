<script>
import SideMenu from '@/components/SideMenu';
import NavBar from '@/components/NavBar';

export default {
  name: 'ApplicationLayout',
  components: {
    SideMenu,
    NavBar,
  },
  computed: {
    keepAliveInclude() {
      return [
        'home',
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
  .side-menu
    side-menu
  .main-content
    transition
      keep-alive(:include="keepAliveInclude", :exclude="keepAliveExclude")
        slot
</template>

<style lang="stylus" scoped>
.application
  height 100%
  width 100%
  display flex
  padding-top 56px
  box-sizing border-box
  position relative
  overflow hidden
  .header
    position absolute
    top 0
    left 0
    width 100%
  .main-content
    box-sizing border-box
    position relative
    width 100%
    height 100%
    overflow-x hidden
    overflow-y auto
    background #fafafa
</style>
