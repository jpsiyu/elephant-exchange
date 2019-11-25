<template>
  <div class="ob">
    <div class="ob-direct" v-for="(item, index) in directs" :key="index">
      <div class="ob-direct-top">
        <span>{{item === 'asks' ? 'ASKS' : 'BIDS'}}</span>
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
          <div class="ob-book-item" v-for="(item, index) in book" :key="index">
            <span>{{item.price}}</span>
            <span>{{item.idex}}</span>
            <span>{{item.eth}}</span>
            <span>{{item.sum}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      directs: ['asks', 'bids']
    }
  },
  computed: {
    book() {
      return [
        { price: 0.00006881, idex: 4359.518341, eth: 0.3, sum: 0.3 },
        { price: 0.00006881, idex: 4359.518341, eth: 0.3, sum: 0.3 },
        { price: 0.00006881, idex: 4359.518341, eth: 0.3, sum: 0.3 },
        { price: 0.00006881, idex: 4359.518341, eth: 0.3, sum: 0.3 },
        { price: 0.00006881, idex: 4359.518341, eth: 0.3, sum: 0.3 },
        { price: 0.00006881, idex: 4359.518341, eth: 0.3, sum: 0.3 },
        { price: 0.00006881, idex: 4359.518341, eth: 0.3, sum: 0.3 },
        { price: 0.00006881, idex: 4359.518341, eth: 0.3, sum: 0.3 },
        { price: 0.00006881, idex: 4359.518341, eth: 0.3, sum: 0.3 },
        { price: 0.00006881, idex: 4359.518341, eth: 0.3, sum: 0.3 },
        { price: 0.00006881, idex: 4359.518341, eth: 0.3, sum: 0.3 },
        { price: 0.00006881, idex: 4359.518341, eth: 0.3, sum: 0.3 },
        { price: 0.00006881, idex: 4359.518341, eth: 0.3, sum: 0.3 },
        { price: 0.00006881, idex: 4359.518341, eth: 0.3, sum: 0.3 },
        { price: 0.00006881, idex: 4359.518341, eth: 0.3, sum: 0.3 },
      ]
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

.ob-book-list{
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
  flex: 1;
  text-align: left;
  font-size: 13px;
}

.ob-book-item:nth-child(even) {
  background: var(--orderbook-body-even);
}
</style>