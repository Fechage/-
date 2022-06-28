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

// 获取服务器的角色列表和部门列表, 与modal配置合并
const modalConfig = computed(() => useModalConfig())
const mainModalRef = ref()
const editInfo = ref({})

// 处理 新建/编辑/删除 功能
const handleNewAndEditUser = (info) => {
  const modal = mainModalRef.value
  if (info.id) {
    modal.titleToggle = '编辑用户'
    editInfo.value = { ...info }
    console.log(editInfo.value)
  } else {
    modal.titleToggle = '新建用户'
  }
  modal.isShowDialog = true
}
</script>

<style lang="less" scoped></style>
