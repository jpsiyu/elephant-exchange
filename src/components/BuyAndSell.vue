<template>
  <div class="bs">
    <div class="bs-direct" v-for="(item, index) in direct" :key="index">
      <div class="bs-direct-top">
        <span>BUY IDEX</span>
        <span>0 ETH</span>
        <i class="el-icon-refresh"></i>
      </div>
      <el-form label-position="left" label-width="60px">
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
  display: flex;
}

.bs-direct {
  flex: 1;
  border: 1px solid var(--border-makret);
}

.bs-direct-top{
  display: flex;
  justify-content: space-between;
}

.bs-direct .el-select,
.bs-direct .el-input {
  width: 200px;
}
</style>
