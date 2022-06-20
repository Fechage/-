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
          <el-button>重置</el-button>
          <el-button type="primary">搜索</el-button>
        </div>
      </template>
    </searchForm>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import searchForm from '@/base/search/src/searchForm.vue'
defineProps({
  searchConfig: {
    type: Object,
    required: true
  }
})

const formData = ref({
  id: '',
  name: '',
  password: '',
  sport: '',
  createTime: ''
})
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
