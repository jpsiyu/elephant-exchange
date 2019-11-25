<template>
  <div class="home">
    <div class="home-left">
      <Markets />
      <MyBalance />
    </div>
    <div class="home-right">
      <Quote />
      <Charts />
      <BuyAndSell />
      <OrderBook />
      <TradeHistory />
    </div>
  </div>
</template>

<script>
import Markets from '@/components/Markets'
import Quote from '@/components/Quote'
import Charts from '@/components/Charts'
import BuyAndSell from '@/components/BuyAndSell'
import OrderBook from '@/components/OrderBook'
import TradeHistory from '@/components/TradeHistory'
import MyBalance from '@/components/MyBalance'
export default {
  components: { Markets, Quote, Charts, BuyAndSell, OrderBook, TradeHistory, MyBalance }
}
</script>

<style scoped>
.home {
  padding: 20px;
  display: flex;
}

.home-left {
  flex: 1;
}

.home-right {
  flex: 3;
  margin-left: 10px;
}
</style>
