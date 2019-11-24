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
  data() {
    return {
      starOnly: false,
      search: '',
      selectedTab: 1
    }
  },
  computed: {
    tabs() {
      return [
        { id: 1, name: 'ETH' },
        { id: 2, name: 'TUSD' },
        { id: 3, name: 'USDC' },
        { id: 4, name: 'EURS' },
        { id: 5, name: 'DAI' }
      ]
    },
    tableData() {
      return [
        { coin: 'ONT', price: 0.038239, vol: 466.20, chg: '+6.63%', name: 'Quant' },
        { coin: 'XDB', price: 0.000239, vol: 143.20, chg: '-2.63%', name: 'digitalbits' },
        { coin: 'XDB', price: 0.000239, vol: 143.20, chg: '-2.63%', name: 'digitalbits' },
        { coin: 'XDB', price: 0.000239, vol: 143.20, chg: '-2.63%', name: 'digitalbits' },
        { coin: 'XDB', price: 0.000239, vol: 143.20, chg: '-2.63%', name: 'digitalbits' },
        { coin: 'XDB', price: 0.000239, vol: 143.20, chg: '-2.63%', name: 'digitalbits' },
        { coin: 'XDB', price: 0.000239, vol: 143.20, chg: '-2.63%', name: 'digitalbits' },
        { coin: 'XDB', price: 0.000239, vol: 143.20, chg: '-2.63%', name: 'digitalbits' },
        { coin: 'XDB', price: 0.000239, vol: 143.20, chg: '-2.63%', name: 'digitalbits' },
        { coin: 'XDB', price: 0.000239, vol: 143.20, chg: '-2.63%', name: 'digitalbits' },
        { coin: 'XDB', price: 0.000239, vol: 143.20, chg: '-2.63%', name: 'digitalbits' },
        { coin: 'XDB', price: 0.000239, vol: 143.20, chg: '-2.63%', name: 'digitalbits' },
        { coin: 'XDB', price: 0.000239, vol: 143.20, chg: '-2.63%', name: 'digitalbits' },
        { coin: 'XDB', price: 0.000239, vol: 143.20, chg: '-2.63%', name: 'digitalbits' },
        { coin: 'XDB', price: 0.000239, vol: 143.20, chg: '-2.63%', name: 'digitalbits' },
        { coin: 'XDB', price: 0.000239, vol: 143.20, chg: '-2.63%', name: 'digitalbits' },
        { coin: 'XDB', price: 0.000239, vol: 143.20, chg: '-2.63%', name: 'digitalbits' },
        { coin: 'XDB', price: 0.000239, vol: 143.20, chg: '-2.63%', name: 'digitalbits' },
        { coin: 'XDB', price: 0.000239, vol: 143.20, chg: '-2.63%', name: 'digitalbits' },
        { coin: 'XDB', price: 0.000239, vol: 143.20, chg: '-2.63%', name: 'digitalbits' },
      ]
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
  border: 1px solid var(--bg-color-depth4);
}

.mk-top {
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 13px;
  background: var(--bg-color-depth1);
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
  background: var(--bg-color-depth6);
  margin: 0 2px;
  padding: 5px 10px;
  cursor: pointer;
}

.mk-tabs span.active {
  background: var(--bg-color-depth4);
}

.mk-star__yellow {
  font-size: 16px;
  color: var(--star-color-active);
}

.mk-star__white {
  font-size: 16px;
  color: var(--star-color-deactive);
}

.mk >>> .el-checkbox__label {
  color: var(--tx-color-depth1);
}

.mk >>> .el-input__inner {
  background: var(--bg-color-depth2);
  color: var(--tx-color-depth1);
  border: 1px solid var(--bg-color-depth3);
}

.mk-table {
  overflow-y: auto;
  height: 400px;
}

.mk-table-column {
  display: flex;
  align-items: center;
  padding: 5px 0;
  font-size: 12px;
  cursor: pointer;
}

.mk-table-column:nth-child(odd) {
  background: var(--bg-color-depth2);
}

.mk-table-column span {
  flex: 1;
}

.mk-table-column span:first-child {
  margin-left: 5px;
}
</style>