<template>
  <div class="charts">
    <div class="charts-tabs">
      <span
        class="charts-tab"
        v-for="item in tabs"
        :key="item.id"
        :class="{'charts-tab--active': item.id===selectedTab}"
        @click="handleTabsClick(item)"
      >{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 1
    }
  },
  computed: {
    tabs() {
      return [
        { id: 1, name: 'PRICE CHART' },
        { id: 2, name: 'DEPTH CHART' },
        { id: 3, name: 'QUICK BALANCES' },
        { id: 4, name: 'BENEFITS' },
      ]
    }
  },
  methods: {
    handleTabsClick(item){
      this.selectedTab = item.id
    }
  }
}
</script>

<style scoped>
.charts {
  margin-top: 10px;
  height: 525px;
  border: 1px solid var(--makret-border);
  background: var(--charts-bg);
  color: var(--charts-content);
  font-size: 14px;
}

.charts-tabs{
  background: var(--charts-tabs-bg);
}

.charts-tab {
  display: inline-block;
  background: var(--charts-tab-bg);
  padding: 10px;
}

.charts-tab:hover {
  cursor: pointer;
  background: var(--charts-tab-hover-bg);
}

.charts-tab--active {
  background: var(--charts-tab-active-bg);
}

.charts-tab--active:hover {
  background: var(--charts-tab-active-bg);
}

</style>