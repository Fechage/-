<template>
  <div class="account">
    <el-form
      label-width="80px"
      :rules="rules"
      :model="account"
      size="large"
      ref="formRef"
      ><el-form-item label="账号:" prop="name">
        <el-input v-model="account.name" placeholder="请输入账号名" />
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input
          v-model="account.password"
          type="password"
          placeholder="请输入密码"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
import useCache from '@/utils/cache'

const store = useStore()
// 获取输入账号和密码
const account = reactive({
  name: '',
  password: ''
})
// 拿到 el-form 组件
const formRef = ref()

// 执行登陆逻辑
const loginAction = (isKeep) => {
  formRef.value.validate((valid) => {
    // 如果账号和密码规则验证通过
    if (valid) {
      if (isKeep) {
        // 则执行缓存密码
        useCache.setCache('user', account.name)
        useCache.setCache('password', account.password)
      } else {
        // 否则清除密码
        useCache.deleteCache('user', account.name)
        useCache.deleteCache('password', account.password)
      }
    }
    // 登陆验证
    store.dispatch('login/accountLoginAction', { ...account })
  })
}

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped></style>
