<script>
export default {
  name: 'SideMenu',
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    },
    onShow() {
      return this.$store.state.screenWidth < 1440;
    },
  },
  methods: {
    changeMenu() {
      this.$store.commit('SET_MENU_COLLAPSE', !this.isCollapse);
    },
  },
};
</script>

<template lang="pug">
.app-side-menu
  el-button(@click="changeMenu", size="small", v-if="onShow")
    i.el-icon-d-arrow-right(v-if="isCollapse")
    i.el-icon-d-arrow-left(v-else)
  el-menu.menu(:default-active="$route.path", router, :collapse="isCollapse", :style="{width: isCollapse ? '' : '200px'}")
    el-menu-item(index="/overview")
      i.fa.fa-home
      span 应用概览
    el-submenu(index="1")
      template(slot="title")
        i.fa.fa-life-ring
        span 交易
      el-menu-item-group
        el-menu-item(index="/accounting_summary")
          span 财务汇总
        el-menu-item(index="/payment_order")
          span 支付订单
        //- el-menu-item(index="/")
          span 企业付款
        //- el-menu-item(index="/")
          span 微信红包
        //- el-menu-item(index="/")
          span 交易报表下载
    //- el-submenu(index="2")
      template(slot="title")
        i.fa.fa-briefcase
        span 业务订单
      el-menu-item(index="/")
        span 业务订单查询
    //- el-submenu(index="3")
      template(slot="title")
        i.fa.fa-cog
        span 应用设置
      el-menu-item(index="/")
        span 支付渠道
      el-menu-item(index="/")
        span 收款账号
      el-menu-item(index="/")
        span Webhooks
      el-menu-item(index="/")
        span 联调工具
</template>

<style lang="stylus" scoped>
.app-side-menu
  height 100%
  padding-top 1px
  .menu
    height 100%
    letter-spacing 1px
    .fa
      font-size 16px
      margin-right 16px
  .el-button
    width 100%
    height 40px
    border none
    color #000
    background #e3e4ea
</style>
