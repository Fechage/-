<template>
  <div class="phone">
    <el-form label-width="80px" size="large">
      <el-form-item label="手机号码:" prop="number">
        <el-input v-model="phone.number" placeholder="请输入手机号码" />
      </el-form-item>
      <el-form-item label="验证码:" prop="verify">
        <div class="vertify">
          <el-input v-model="phone.verify" placeholder="验证码" />
          <el-button class="el-btn" type="primary">获取验证</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const phone = reactive({
  number: '',
  verify: ''
})
</script>

<style lang="less" scoped>
.vertify {
  display: flex;
  .el-btn {
    margin-left: 10px;
  }
}
</style>
