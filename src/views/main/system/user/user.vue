<template>
  <div class="user">
    <searchForm v-bind="userConfig"></searchForm>
  </div>
</template>

<script setup>
import searchForm from '@/components/search-form/index'
import userConfig from './config/user.config.js'
</script>

<style lang="less" scoped></style>
