<template lang="pug">
.content
  h1 登录页面
  .kk iefuewufweuwueu
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      records: [],
      currentPage: 1,
      totalPages: 1,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const { data } = this.$apis.model.index();
        this.records = data.records;
        this.currentPage = data.current_page;
        this.totalPages = data.total_pages;
      } catch (error) {
        this.$message('获取数据异常', 'top');
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.content
  height 100%
</style>
