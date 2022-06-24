<template>
  <div class="user">
    <!-- 表单搜索模块 -->
    <main-search :searchConfig="searchConfig"></main-search>
    <!-- 表单展示模块 -->
    <main-content :contentConfig="contentConfig"></main-content>
  </div>
</template>

<script setup>
import MainContent from '@/components/main-content/index'
import MainSearch from '@/components/main-search/index'
import searchConfig from './config/user.config.js'
import contentConfig from './config/content.config.js'
</script>

<style lang="less" scoped></style>
