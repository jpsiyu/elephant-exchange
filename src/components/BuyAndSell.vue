<template>
  <div class="bs">
    <div class="bs-direct" v-for="(item, index) in direct" :key="index">
      <div class="bs-direct-top">
        <span>BUY IDEX</span>
        <span>0 ETH</span>
        <i class="bs-direct-clear el-icon-refresh"></i>
      </div>
      <el-form class="bs-form" label-position="left" label-width="60px">
        <el-form-item label="Type" prop="type">
          <el-select v-model="formData.type">
            <el-option
              v-for="(item, index) in buyTypes"
              :key="index"
              :label="item.name"
              :value="item.type"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Price" prop="price">
          <el-input v-model="formData.price" placeholder="000.00"></el-input>
          <span>ETH</span>
        </el-form-item>
        <el-form-item label="Amount" prop="amount">
          <el-input v-model="formData.amount" placeholder="000.00"></el-input>
          <span>IDEX</span>
        </el-form-item>
        <el-form-item label="Total" prop="total">
          <el-input v-model="formData.total" placeholder="000.00"></el-input>
          <span>ETH</span>
        </el-form-item>
      </el-form>
      <el-button class="bs-btn-buy" type="success" v-if="item==='buy'" size="large">BUY</el-button>
      <el-button class="bs-btn-sell" type="danger" v-if="item==='sell'" size="large">SELL</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      direct: ['buy', 'sell'],
      formData: {
        type: '',
        price: '',
        amount: '',
        total: '',
      }
    }
  },
  computed: {
    buyTypes() {
      return [
        { type: 1, name: 'Limit Order' },
        { type: 2, name: 'Market Order' },
      ]
    }
  }
}
</script>

<style scoped>
.bs {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.bs-direct {
  width: 49%;
  border: 1px solid var(--makret-border);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bs-direct-top {
  display: flex;
  justify-content: space-between;
  background: var(--buysell-top-bg);
  color: var(--market-tab-content);
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}

.bs-direct-clear{
  cursor: pointer;
  font-size: 20px;
}

.bs-form {
  padding: 10px;
}

.bs-form >>> .el-form-item__label {
  color: var(--content-color);
}

.bs-form >>> .el-input__inner {
  background: var(--bg-color);
  border-color: var(--makret-border);
  color: var(--content-color);
}

.bs-direct .el-select,
.bs-direct .el-input {
  width: 250px;
  margin-right: 10px;
}

.bs-btn-buy,
.bs-btn-sell{
  position: relative;
  left: 10px;
  width: 250px;
  margin-bottom: 20px;
}
</style>
