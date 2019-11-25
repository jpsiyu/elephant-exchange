<template>
  <div class="home">
    <div class="home-left">
      <Markets />
    </div>
    <div class="home-right">
      <Quote />
      <Charts />
    </div>
  </div>
</template>

<script>
import Markets from '@/components/Markets'
import Quote from '@/components/Quote'
import Charts from '@/components/Charts'
export default {
  components: { Markets, Quote, Charts }
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
}
</style>
