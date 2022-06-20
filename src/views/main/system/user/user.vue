<template>
  <div class="user">
    <!-- 表单搜索模块 -->
    <mainSearch :searchConfig="searchConfig"></mainSearch>
    <!-- 表单展示模块 -->
    <mainTable :userList="userList" :propList="propList">
      <template #status="statu">
        <el-button @click="aaa(statu)">
          {{ statu.row.enable ? '启用' : '禁止' }}
        </el-button>
      </template>
    </mainTable>
  </div>
</template>

<script setup>
import mainSearch from '@/components/main-search/index.js'
import mainTable from '@/base/table/index'
import searchConfig from './config/user.config.js'

import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
const store = useStore()
// 表头配置
const propList = [
  { prop: 'name', label: '用户名', minWidth: '100' },
  { prop: 'realname', label: '真实姓名', minWidth: '100' },
  { prop: 'cellphone', label: '手机号码', minWidth: '100' },
  { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
  {
    prop: 'createAt',
    label: '创建时间',
    minWidth: '250',
    slotName: 'createAt'
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    minWidth: '250',
    slotName: 'updateAt'
  }
]
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

const aaa = (statu) => {
  console.log(statu)
}
</script>

<style lang="less" scoped></style>
