<template>
  <div class="mk">
    <div class="mk-top app-color-dark2">
      <span>MARKETS</span>
      <el-checkbox class="mk-top__star" v-model="starOnly">
        <span class="mk-star__yellow">★</span> Only
      </el-checkbox>
      <el-input v-model="search" placeholder="Search..."></el-input>
    </div>
    <div class="mk-tabs">
      <span
        v-for="item in tabs"
        :key="item.id"
        :class="{'active': item.id===selectedTab}"
        @click="chooseTab(item)"
      >{{item.name}}</span>
    </div>
    <div class="mk-table">
      <div class="mk-table-column app-color-dark3">
        <span class="mk-star__yellow">★</span>
        <span>Coin</span>
        <span>Price</span>
        <span>Vol</span>
        <span>Chg</span>
        <span>Name</span>
      </div>
      <div class="mk-table-column" v-for="(item, index) in tableData" :key="index">
        <span class="mk-star__white">★</span>
        <span>{{item.coin}}</span>
        <span>{{item.price}}</span>
        <span>{{item.vol}}</span>
        <span>{{item.chg}}</span>
        <span>{{item.name}}</span>
      </div>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['market'],
  data() {
    return {
      starOnly: false,
      search: '',
      selectedTab: 1
    }
  },
  computed: {
    tabs() {
      if (!this.market) return []
      const tabList = this.market.groups.map((e, index) => {
        return {
          id: index,
          name: e.base
        }
      })
      return tabList
    },
    tableData() {
      if (!this.market) return []
      return this.market.groups[0].pairs
    }
  },
  methods: {
    chooseTab(item) {
      this.selectedTab = item.id
    }
  }
}
</script>

<style scoped>
.mk {
  border: 1px solid var(--makret-border);
}

.mk-top {
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 13px;
  background: var(--market-top-bg);
  color: var(--market-top-content);
}

.mk-top .el-input {
  width: 180px;
}

.mk-top__star {
  margin: 0 20px;
}

.mk-tabs {
  padding-top: 5px;
}

.mk-tabs span {
  display: inline-block;
  background: var(--market-tab-bg);
  margin: 0 2px;
  padding: 5px 10px;
  cursor: pointer;
  color: var(--market-tab-content);
}

.mk-tabs span.active {
  background: var(--market-tab-active-bg);
}

.mk-star__yellow {
  font-size: 16px;
  color: var(--star-active-bg);
}

.mk-star__white {
  font-size: 16px;
  color: var(--star-deactive-bg);
}

.mk >>> .el-checkbox__label {
  color: var(--market-top-content);
}

.mk >>> .el-input__inner {
  background: var(--market-input-bg);
  color: var(--content-color);
  border: 1px solid var(--market-input-border);
}

.mk-table {
  overflow-y: auto;
  height: 560px;
}

.mk-table-column {
  display: flex;
  align-items: center;
  padding: 5px 0;
  font-size: 12px;
  cursor: pointer;
}

.mk-table-column:nth-child(even) {
  background: var(--market-table-even--bg);
}

.mk-table-column span {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mk-table-column span:first-child {
  margin-left: 5px;
}
</style>