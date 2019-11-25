<template>
  <div class="home">
    <div class="home-left">
      <Markets />
    </div>
    <div class="home-right">
      <Quote />
    </div>
  </div>
</template>

<script>
import Markets from '@/components/Markets'
import Quote from '@/components/Quote'
export default {
  components: { Markets, Quote }
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
