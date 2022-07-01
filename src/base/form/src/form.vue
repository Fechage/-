<template>
  <div class="form">
    <slot name="header"></slot>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemLayout">
              <!-- input类型 -->
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  class="my-input"
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <!-- select类型 -->
              <template v-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <!-- datepikerle类型 -->
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <slot name="footer"></slot>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemLayout: {
    type: Object,
    default: () => ({
      xl: 6, // >1920px 4个
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  },
  colLayout: { type: Object },
  formItems: { type: Array },
  modelValue: { type: Object }
})
const emit = defineEmits(['update:modelValue'])
const formData = ref({ ...props.modelValue })

watch(
  formData,
  (newValue) => {
    emit('update:modelValue', newValue)
  },
  { deep: true }
)
</script>

<style lang="less" scoped>
.form {
  padding: 10px;
}
</style>
