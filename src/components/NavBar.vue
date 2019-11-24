<template>
  <div class="nb">
    <div class="nb-left">
      <img class="nb-logo" src="@/assets/logo.png" alt />
      <span class="nb-mark">ELEDEX</span>
    </div>
    <div class="nb-right">
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
export default {
  data() {
    return {
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
  methods: {
    chooseTab(item) {
      if (item.link) {
        this.selected = item.id

      }
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
  box-shadow: 0 1px 1px var(--bg-color-depth5);
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
  background: var(--bg-color-depth4);
}

li.active {
  background: var(--bg-color-depth5);
}
</style>