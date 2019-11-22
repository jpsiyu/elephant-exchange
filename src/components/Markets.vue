<template>
  <div class="mk">
    <div class="mk-top">
      <span>MARKETS</span>
      <el-checkbox v-model="starOnly">Star Only</el-checkbox>
      <el-input v-model="search" placeholder="Search..."></el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      starOnly: false,
      search: ''
    }
  },
}
</script>

<style scoped>
.mk {
  border: 1px solid #1e678a;
}

.mk-top {
  display: flex;
  background: #0c2836;
}

.mk-top .el-input {
  width: 200px;
}
</style>