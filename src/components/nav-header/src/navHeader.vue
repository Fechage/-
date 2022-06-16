<template>
  <div class="header">
    <el-dropdown>
      <div class="avatar">
        <el-avatar :icon="UserFilled" />
        <span>{{ username }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
          <el-dropdown-item @click="exit" divided>退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { UserFilled } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import useCache from '@/utils/cache'

const store = useStore()
const router = useRouter()
const username = computed(() => store.state.login.userInfo[-1])
const exit = () => {
  router.push('/login')
  useCache.deleteCache('token')
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row-reverse;
  align-items: center;
  .avatar {
    display: flex;
    align-items: center;
    cursor: pointer;
    .el-avatar {
      margin-right: 10px;
    }
  }
}
</style>
