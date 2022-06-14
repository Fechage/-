<template>
  <div class="login-panel">
    <h1 class="title">自助交租系统</h1>
    <h3 class="title">让每位租客实现交租自由</h3>
    <!-- 切换栏 -->
    <el-tabs type="border-card" stretch v-model="currentTab">
      <!-- 账号登陆 -->
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon style="vertical-align: middle"><UserFilled /></el-icon>
            账号登陆
          </span>
        </template>
        <!-- 输入组件 -->
        <login-account ref="accountRef" @change-loading="changeLoading" />
      </el-tab-pane>
      <!-- 手机登陆 -->
      <el-tab-pane name="phone">
        <template #label>
          <el-icon style="vertical-align: middle"><Iphone /></el-icon>
          <span> 手机登陆</span>
        </template>
        <!-- 输入组件 -->
        <login-phone ref="phoneRef" :isLoading="isLoading" />
      </el-tab-pane>
    </el-tabs>
    <!-- 记住/忘记密码 -->
    <div class="account-control">
      <el-checkbox v-model="isKeep" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <!-- 登陆按钮 -->
    <el-button
      class="el-btn"
      type="primary"
      @click="handelLoginClick"
      v-loading="isLoading"
      element-loading-text="登陆中..."
      >立即登陆</el-button
    >
  </div>
</template>

<script setup>
import { UserFilled, Iphone } from '@element-plus/icons-vue'
import { ref, onUpdated } from 'vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'

// 记录'记住密码'状态
const isKeep = ref(true)
// 记录当前所在的标签页
const currentTab = ref('account')
onUpdated(() => console.log(currentTab.value))
const isLoading = ref(false)
// 拿到 login-account login-phone组件
const accountRef = ref()
const phoneRef = ref()

// 如果当前标签页在"账号登陆",则调用 login-account 中的 loginAction 执行登陆要执行的逻辑,
// 并将"记住密码"传过去
const handelLoginClick = () => {
  isLoading.value = true
  if (currentTab.value === 'account') {
    accountRef.value.loginAction(isKeep.value)
  }
}

const changeLoading = () => {
  isLoading.value = false
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;
  margin-bottom: 150px;
  .title {
    text-align: center;
  }
  .account {
    vertical-align: middle;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
  }
  .el-btn {
    width: 100%;
    height: 40px;
  }
}
</style>
