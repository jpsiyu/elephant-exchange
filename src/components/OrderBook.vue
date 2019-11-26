<template>
  <div class="ob">
    <div class="ob-direct" v-for="(direct, index) in directs" :key="index">
      <div class="ob-direct-top">
        <span>{{direct === 'asks' ? 'ASKS' : 'BIDS'}}</span>
        <span>Total: 5901972.43339052 IDEX</span>
      </div>
      <div class="ob-book">
        <div class="ob-book-item ob-book-item--head">
          <span>Price</span>
          <span>IDEX</span>
          <span>ETH</span>
          <span>Sum(ETH)</span>
        </div>
        <div class="ob-book-list">
          <div
            class="ob-book-item"
            v-for="(item, index) in (direct === 'asks' ? asksBook : bidsBook)"
            :key="index"
          >
            <span>{{item.price}}</span>
            <span>{{item.tradeAmount}}</span>
            <span>{{item.baseAmount}}</span>
            <span>{{item.baseAmount}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['book'],
  data() {
    return {
      directs: ['asks', 'bids'],
    }
  },
  computed: {
    asksBook() {
      return this.book ? this.book.asks : []
    },
    bidsBook() {
      return this.book ? this.book.bids : []
    }
  }
}
</script>

<style scoped>
.ob {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.ob-direct {
  border: 1px solid var(--makret-border);
  width: 49%;
}

.ob-direct-top {
  background: var(--buysell-top-bg);
  color: var(--market-tab-content);
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}

.ob-book-list {
  height: 400px;
  overflow-y: auto;
}

.ob-book-item {
  display: flex;
  justify-content: space-between;
  padding: 3px 10px;
}

.ob-book-item--head {
  background: var(--orderbook-header-bg);
  padding: 10px;
}

.ob-book-item span {
  display: inline-block;
  width: 100px;
  text-align: left;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ob-book-item:nth-child(even) {
  background: var(--orderbook-body-even);
}
</style>