<template lang="pug">
#app
  home-layout(v-if="layout === 'hoeeme'")
    router-view
  application-layout(v-else)
    router-view
</template>

<script>
import HomeLayout from '@/layouts/HomeLayout';
import ApplicationLayout from '@/layouts/ApplicationLayout';

export default {
  name: 'app',
  components: {
    HomeLayout,
    ApplicationLayout,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
  watch: {
    $route() {
      document.title = this.$route.meta.title;
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize(e) {
      if (e.target.innerWidth > 1440) {
        this.isCollapse = false;
      } else if (e.target.innerWidth <= 1440) {
        this.isCollapse = true;
      }
      this.$store.commit('SET_MENU_COLLAPSE', this.isCollapse);
      this.$store.commit('SET_SCREENWIDTH', e.target.innerWidth);
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
  background #ffffff
  height 100%
  width 100%

.el-table
  color #424344
</style>
