<template>
  <div class="Modal">
    <el-dialog title="新建用户" v-model="isShow" width="30%">
      <dialog-form v-bind="modalConfig"></dialog-form>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import DialogForm from '@/base/form/index'
defineProps({
  modalConfig: Object
})
const isShow = ref(true)
</script>

<style lang="less" scoped></style>
