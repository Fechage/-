<template>
  <div class="search">
    <searchForm v-bind="searchConfig" v-model="formData">
      <!-- 搜索标题插槽 -->
      <template #header>
        <span class="header">检索</span>
      </template>
      <!-- 搜索按钮插槽 -->
      <template #footer>
        <div class="footer">
          <el-button @click="handleReset" plain>重置</el-button>
          <el-button plain>搜索</el-button>
        </div>
      </template>
    </searchForm>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import searchForm from '@/base/search/src/searchForm.vue'

const props = defineProps({
  searchConfig: {
    type: Object,
    required: true
  }
})
// 1.根据传入的配置searchConfig来确定需要绑定的数据
// 1.1.拿到配置的表格配置
const formItems = props.searchConfig?.formItems ?? []
// 1.2.动态创建绑定数据
const originFormData = {}
for (const item of formItems) {
  originFormData[item.field] = ''
}
const formData = ref(originFormData)

// 2.重置按钮功能
const handleReset = () => {
  for (const key in formData.value) {
    formData.value[key] = ''
  }
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
