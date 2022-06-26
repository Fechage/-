<template>
  <div class="user">
    <!-- 表单搜索模块 -->
    <main-search :searchConfig="searchConfig" />
    <!-- 新建用户模块 -->
    <main-modal :modalConfig="modalConfig"></main-modal>
    <!-- 表单展示模块 -->
    <main-content :contentConfig="contentConfig" />
  </div>
</template>

<script setup>
import MainContent from '@/components/main-content/index'
import mainSearch from '@/components/main-search/index'
import mainModal from '@/components/main-modal/src/main-modal'

import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'
</script>

<style lang="less" scoped></style>
