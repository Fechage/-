<template>
  <div class="main-content">
    <my-table :userList="userList" v-bind="contentConfig">
      <!-- 插入状态栏的内容 -->
      <template #status="statu">
        <el-button v-if="statu.row.enable" type="success" size="small" disabled>
          {{ '启用' }}
        </el-button>
        <el-button
          v-else-if="!statu.row.enable"
          type="danger"
          size="small"
          disabled
        >
          {{ '禁用' }}
        </el-button>
      </template>
      <!-- 插入操作栏的内容 -->
      <template #handler>
        <el-button size="small" text>
          <el-icon><Edit /></el-icon>编辑</el-button
        >
        <el-button type="danger" size="small" text>
          <el-icon><Delete /></el-icon>删除</el-button
        >
      </template>
      <!-- 插入格式化时间 -->
      <template #createAt="createAt">
        <span>{{ utcFormat(createAt.row.createAt) }}</span>
      </template>
      <template #updateAt="updateAt">
        <span>{{ utcFormat(updateAt.row.updateAt) }}</span>
      </template>
    </my-table>
  </div>
</template>

<script setup>
import { Edit, Delete } from '@element-plus/icons-vue'
import MyTable from '@/base/table/index'

import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
import { utcFormat } from '@/utils/timeFormat'

defineProps({ contentConfig: Object })
const store = useStore()

// 发送请求表格数据
store.dispatch('system/getTableDataAction', {
  pageUrl: '/users/list',
  queryInfo: {
    offset: 0,
    size: 10
  }
})
// 获取表格数据
const userList = computed(() => store.state.system.list)
// const totalCount = computed(() => store.state.system.totalCount)
</script>

<style lang="less" scoped>
.el-button {
  margin: 0;
}
</style>
