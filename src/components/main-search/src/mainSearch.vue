<template>
  <div class="search">
    <search-form v-bind="searchConfig" v-model="formData">
      <!-- 搜索标题插槽 -->
      <template #header>
        <span class="header">检索</span>
      </template>
      <!-- 搜索按钮插槽 -->
      <template #footer>
        <div class="footer">
          <el-button @click="handleReset" plain>重置</el-button>
          <el-button @click="handleSearch" plain>搜索</el-button>
        </div>
      </template>
    </search-form>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { usePermission, useFormData } from '@/hooks/index'

import searchForm from '@/base/form/src/form.vue'

const props = defineProps({
  searchConfig: {
    type: Object,
    required: true
  }
})
const store = useStore()
//  1.动态创建表单项
const formData = useFormData(props.searchConfig)

// 2.重置功能
const handleReset = () => {
  for (const key in formData.value) {
    formData.value[key] = ''
  }
}

// 3.搜索功能
// 3.1判断用户有否访问权限
const hasQuery = usePermission(props.searchConfig.pageName, 'query')
// 3.2发送请求表格数据
// const pageInfo = ref({ currentPage: 0, pageSize: 10 })
const getData = () => {
  if (!hasQuery) return
  store.dispatch('system/getTableDataAction', {
    pageName: props.searchConfig.pageName,
    queryInfo: {
      // offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
      size: 10,
      ...formData.value
    }
  })
}
const handleSearch = () => {
  getData()
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: center;
}
.footer {
  display: flex;
  justify-content: flex-end;
}
</style>
