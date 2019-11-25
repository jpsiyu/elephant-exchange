<template>
  <div class="mb">
    <p class="mb-top">My Balance</p>
    <div class="mb-head mb-item">
      <span>Coin</span>
      <span>Avaliable</span>
      <span>In Open Orders</span>
    </div>
    <div>
      <div class="mb-item" v-for="(item, index) in deposited" :key="index">
        <span>{{item.coin}}</span>
        <span>{{item.avaliable}}</span>
        <span>{{item.inOpenOrders}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deposited: [
        { coin: 'ETH', avaliable: 12.902, inOpenOrders: 4.920 },
        { coin: 'USDT', avaliable: 12.902, inOpenOrders: 4.920 },
        { coin: 'BTC', avaliable: 12.902, inOpenOrders: 4.920 },
      ]
    }
  },
}
</script>

<style scoped>
.mb {
  margin-top: 10px;
  border: 1px solid var(--makret-border);
}

.mb-top {
  background: var(--buysell-top-bg);
  color: var(--market-tab-content);
  padding: 10px 5px;
  margin: 0;
}

.mb-head{
  background: var(--balance-head-bg);
}

.mb-item {
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
}

.mb-item span {
  flex: 1;
  text-align: left;
}
</style>