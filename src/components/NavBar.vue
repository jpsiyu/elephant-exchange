<template>
  <div class="nb">
    <div class="nb-left">
      <img class="nb-logo" src="@/assets/logo.png" alt />
      <span class="nb-mark">ELEDEX</span>
    </div>
    <div class="nb-right">
      <span>{{isNight ? 'Night': 'Day'}}</span>
      <el-switch class="nb-mode" v-model="isNight" @change="handleModeChange"></el-switch>
      <div class="nb-price">
        <span>ETH PRICE: $156.36 USD</span>
        <span>
          GAS PRICE: 25 GWEI
          <i class="el-icon-info" />
        </span>
      </div>
      <ul>
        <li
          v-for="item in tabs"
          :key="item.id"
          :class="{'active': item.id===selected}"
          @click="chooseTab(item)"
        >
          <template v-if="item.id===8">
            <i class="el-icon-goods"></i>
          </template>
          <template v-else>
            <span>{{item.name}}</span>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import storage from '@/scripts/storage'
export default {
  data() {
    return {
      isNight: true,
      selected: 2
    }
  },
  computed: {
    tabs() {
      return [
        { id: 1, name: 'TRADE', link: '/trade' },
        { id: 2, name: 'ORDERS' },
        { id: 3, name: 'BALANCES' },
        { id: 4, name: 'HELP' },
        { id: 5, name: 'EN' },
        { id: 6, name: 'CREATE ACCOUNT', link: '/signup' },
        { id: 7, name: 'LOGIN', link: '/login' },
        { id: 8, name: 'USER' },
      ]
    }
  },
  created() {
    this.isNight = storage.getMode() === 'night'
  },
  methods: {
    chooseTab(item) {
      if (item.link) {
        this.selected = item.id

      }
    },
    handleModeChange(val) {
      const mode = val ? 'night' : 'day'
      storage.setMode(mode)
      document.body.className = mode
    }
  }
}
</script>

<style scoped>
.nb {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-shadow: 0 1px 1px var(--bg-nav-shadow);
}

.nb-left,
.nb-right {
  display: flex;
  align-items: center;
}

.nb-right {
  font-size: 14px;
}

.nb-logo {
  cursor: pointer;
  width: 30px;
  height: 30px;
}

.nb-mark {
  font-size: 24px;
}

.nb-price {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}

.nb-mode {
  margin-left: 10px;
}

.nb >>> .nb-mode.el-switch.is-checked .el-switch__core {
  background-color: var(--bg-color--depth1);
  border-color: var(--bg-color--depth1);
}

ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
  padding: 16px 20px;
  cursor: pointer;
  user-select: none;
}

li.active:hover,
li:hover {
  background: var(--bg-nav-hover);
}

li.active {
  background: var(--bg-nav-active);
}
</style>