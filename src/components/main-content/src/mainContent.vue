<template>
  <div class="main-content">
    <my-table
      :userList="userList"
      :totalCount="totalCount"
      v-model:page="pageInfo"
      v-bind="contentConfig"
    >
      <!-- 插入表头:新建用户 -->
      <template #headerHandle>
        <el-button @click="createUser" type="primary">新建用户</el-button>
      </template>
      <!-- 插入状态栏的内容:启用/禁用-->
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
      <!-- 插入操作栏的内容:编辑/删除-->
      <template #handler>
        <el-button @click="editUser" size="small" text>
          <el-icon><Edit /></el-icon>编辑</el-button
        >
        <el-button @click="deleteUser" type="danger" size="small" text>
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
      <!--  -->
    </my-table>
  </div>
</template>

<script setup>
import { Edit, Delete } from '@element-plus/icons-vue'
import MyTable from '@/base/table/index'

import { ref, computed, watch } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { utcFormat } from '@/utils/timeFormat'

defineProps({ contentConfig: Object })
const store = useStore()
// 页脚信息
const pageInfo = ref({ currentPage: 1, pageSize: 5 })
watch(pageInfo, () => getData())

// 请求首屏展示表格
const getData = () => {
  store.dispatch('system/getTableDataAction', {
    pageName: 'users',
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize
    }
  })
}
getData()

// 获取表格数据
const userList = computed(() => store.state.system.list)
// 获取页脚数据
const totalCount = computed(() => store.state.system.totalCount)

// 新建用户, 编辑, 删除操作
const createUser = () => {
  store.dispatch('system/createUserAction')
}
const editUser = () => {}
const deleteUser = () => {}
</script>

<style lang="less" scoped>
.el-button {
  margin: 0;
}
</style>
