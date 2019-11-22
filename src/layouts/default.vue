<template>
  <div>
    <NavBar />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  components: { NavBar }
}
</script>

<style>
.main {
  margin-top: 20px;
}
</style>
