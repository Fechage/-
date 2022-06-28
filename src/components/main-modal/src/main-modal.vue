<template>
  <div class="Modal">
    <el-dialog
      :title="titleToggle"
      v-model="isShowDialog"
      width="30%"
      center
      destroy-on-close
    >
      <dialog-form v-bind="modalConfig" v-model="formData"></dialog-form>
      <template #footer>
        <el-button @click="handleDialogClose" plain>取消</el-button>
        <el-button @click="handleDialogConfirm" type="primary" plain
          >确认</el-button
        >
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useFormData } from '@/hooks/index'
import DialogForm from '@/base/form/index'

const props = defineProps({
  modalConfig: Object,
  editInfo: Object
})
const store = useStore()
const titleToggle = ref('新建用户')
// 1.动态创建并绑定表单项
const formData = useFormData(props.modalConfig)
watch(
  () => props.editInfo,
  (newV) => {
    for (const item of props.modalConfig.formItems) {
      formData.value[`${item.field}`] = newV[`${item.field}`]
    }
    console.log(newV)
  }
)
// 2.Dialog 的确认/取消按钮
const isShowDialog = ref(false)
// 2.1取消按钮
const handleDialogClose = () => {
  isShowDialog.value = false
}
// 2.2确认按钮
const handleDialogConfirm = () => {
  if (props.editInfo) {
    store.dispatch('system/editUserAction', {
      pageName: props.modalConfig.pageName,
      data: { ...formData.value },
      id: props.editInfo.id
    })
  } else {
    store.dispatch('system/newUserAction', {
      pageName: props.modalConfig.pageName,
      data: { ...formData.value }
    })
  }
  isShowDialog.value = false
}

defineExpose({
  isShowDialog,
  titleToggle
})
</script>

<style lang="less" scoped></style>
