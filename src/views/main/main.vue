<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside class="aside" width="200px">
        <navMenu />
      </el-aside>
      <el-container class="page">
        <el-header class="header">
          <navHeader />
        </el-header>
        <ElConfigProvider :locale="zhCn">
          <el-main class="page-content"><router-view></router-view></el-main>
        </ElConfigProvider>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

import navMenu from '@/components/nav-menu/index'
import navHeader from '@/components/nav-header/index'
</script>

<style lang="less" scoped>
.main {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.main-content,
.page {
  height: 100%;
}
.page-content {
  height: calc(100% - 48px);
  border-left: 1px solid #eaecef;
  border-top: 1px solid #eaecef;
}
</style>
