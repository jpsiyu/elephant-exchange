<template>
  <div class="qu">
    <div class="qu-left">
      <span>IDEX/ETH</span>
      <span>IDEX Token</span>
      <img class="qu-left__img" src="@/assets/logo.png" alt />
    </div>
    <div class="qu-right">
      <el-row class="qu-right__row">
        <el-col :span="6">Last Price</el-col>
        <el-col :span="6">24hr H</el-col>
        <el-col :span="6">24hr L</el-col>
        <el-col :span="6">24hr Change</el-col>
      </el-row>
      <el-row class="qu-right__row">
        <el-col :span="6">0.00006401</el-col>
        <el-col :span="6">0.000071</el-col>
        <el-col :span="6">0.00006401</el-col>
        <el-col :span="6">-5.87149559%</el-col>
      </el-row>
      <el-row class="qu-right__row">24hr Volume: 290986.88 IDEX / 19.12 ETH</el-row>
    </div>
  </div>
</template>

<style scoped>
.qu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--quote-bg);
  font-size: 13px;
}

.qu-left {
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.qu-left__img {
  width: 20px;
  height: 20px;
}

.qu-right{
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.qu-right__row {
  width: 600px;
  background: var(--quote-body-bg);
  padding: 5px;
}

.qu-right__row:first-child{
  background: var(--quote-header-bg)
}

.qu-right__row:last-child{
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--quote-header-bg)
}
</style>