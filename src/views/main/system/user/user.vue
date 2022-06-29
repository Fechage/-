<template>
  <div class="user">
    <!-- 表单搜索模块 -->
    <main-search :searchConfig="searchConfig" />
    <!-- 新建用户模块 -->
    <main-modal
      :modalConfig="modalConfig"
      :editInfo="editInfo"
      ref="mainModalRef"
    ></main-modal>
    <!-- 表单展示模块 -->
    <main-content
      :contentConfig="contentConfig"
      @handleNewAndEditUser="handleNewAndEditUser"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import MainContent from '@/components/main-content/index'
import mainSearch from '@/components/main-search/index'
import mainModal from '@/components/main-modal/src/main-modal'

import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import useModalConfig from './config/modal.config'

// 1 获取服务器的角色列表和部门列表, 与modal配置合并
const modalConfig = computed(() => useModalConfig())
const mainModalRef = ref()

// 2 新建/编辑/删除 功能
const editInfo = ref({}) // editInfo 存放用户源数据
const handleNewAndEditUser = (info) => {
  const modal = mainModalRef.value
  if (info.id) {
    // 2.1 编辑操作: 将源数据赋值给 editInfo
    modal.titleToggle = '编辑用户'
    editInfo.value = { ...info }
  } else {
    // 2.2 新建操作: 将 {} 赋值给 editInfo
    modal.titleToggle = '新建用户'
    editInfo.value = {}
  }
  modal.isShowDialog = true
}
</script>

<style lang="less" scoped></style>
