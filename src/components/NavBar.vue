<script>
import { mapMutations } from 'vuex';

export default {
  name: 'NavBar',
  data() {
    return {
      messages: 0,
      account: '',
    };
  },
  mounted() {
    // this.fetchMessage();
  },
  methods: {
    ...mapMutations({
      handleSearch: 'SET_KEYWORD',
    }),
    async logout() {
      const loading = this.$loading({ fullscreen: true, text: '正在退出...' });
      await this.$apis.auth.logout();
      this.$store.commit('SET_TOKEN', '');
      loading.close();
      this.$router.push('/login');
    },
    async fetchMessage() {
      try {
        const { data } = await this.$apis.message.dashboard();
        this.messages = data.message_unread;
        this.admin = data.name;
      } catch (error) {
        this.$message.error('获取数据失败');
      }
    },
  },
};
</script>

<template lang="pug">
.nav-bar
  .logo
    //- img.logo-icon(src="/static/logo.png")
    .title PAY++
  .nav-items
    ul.menus
      //- li
        a(href="/messages")
          i.fa.fa-bell-o
          el-badge.item(:max="10", :value="messages")
            | 通知
      li
        span(@click="logout")
          i.fa.fa-sign-out
          | 退出
</template>

<style lang="stylus" scoped>
.nav-bar
  display flex
  height 57px
  background RGBA(0, 0, 0, 0.9)
  padding-left 220px
  box-sizing border-box
  border-bottom 1px solid #DADADA
  color #fff
  .logo
    width 200px
    height 57px
    display flex
    align-items center
    margin-left -180px
    .logo-icon
      width 30px
    .title
      font-size 20px
      font-weight bold
      margin-left 10px
  .nav-items
    width 100%
    height 100%
    box-sizing border-box
    .menus
      float right
      box-sizing border-box
      list-style none
      margin-right 16px
      li
        display inline-block
        position relative
        a, span
          display inline-block
          box-sizing border-box
          text-decoration none
          padding 18px
          height 56px
          font-size 15px
          line-height 20px
          color #999c9e
          cursor pointer
          &:hover
            opacity 0.8
          .fa
            margin-right 6px
</style>
