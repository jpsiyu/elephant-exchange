<template>
  <div class="th">
    <div class="th-top">
      <div class="th-top-title">TRADE HISTORY</div>
      <span
        class="th-tab"
        v-for="item in tabs"
        :key="item.id"
        :class="{'active': item.id===selectedTab}"
        @click="handleTab(item)"
      >{{item.name}}</span>
    </div>
    <div class="th-main">
      <div class="th-item th-item--header">
        <span>Date</span>
        <span>Type</span>
        <span>Price(ETH)</span>
        <span>Amount(IDEX)</span>
        <span>Total(ETH)</span>
      </div>
      <div class="th-item" v-for="(item, index) in trades" :key="index">
        <span>{{item.time}}</span>
        <span>{{item.type}}</span>
        <span>{{item.price}}</span>
        <span>{{item.amount}}</span>
        <span>{{item.total}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 1,
    }
  },
  computed: {
    tabs() {
      return [
        { id: 1, name: 'MARKET TRADES' },
        { id: 2, name: 'MY TRADES' },
      ]
    },
    trades() {
      return [
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
        { time: '2019-11-25 13:51:56', type: 'buy', price: 0.00006714, amount: 750, total: 0.05035742 },
      ]
    }
  },
  methods: {
    handleTab(item) {
      this.selectedTab = item.id
    }
  }
}
</script>

<style scoped>
.th {
  margin-top: 10px;
  border: 1px solid var(--makret-border);
}

.th-top {
  background: var(--buysell-top-bg);
  color: var(--market-tab-content);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
}

.th-top-title {
  padding: 10px;
}

.th-tab {
  padding: 10px;
  cursor: pointer;
}

.th-tab:hover {
  background: var(--charts-tab-hover-bg);
}

.th-tab.active {
  background: var(--charts-tab-active-bg);
}

.th-item {
  display: flex;
  justify-content: space-between;
  padding: 3px 10px;
}

.th-item span {
  display: inline-block;
  flex: 1;
  text-align: left;
  font-size: 13px;
}

.th-item--header {
  background: var(--orderbook-header-bg);
  padding: 10px;
}

.th-item:nth-child(even) {
  background: var(--orderbook-body-even);
}
</style>