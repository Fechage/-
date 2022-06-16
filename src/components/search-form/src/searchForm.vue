<template>
  <div class="serach-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemLayout">
              <!-- input类型 -->
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input :placeholder="item.placeholder" />
              </template>
              <!-- select类型 -->
              <template v-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder">
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <!-- datepiker -->
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker v-bind="item.otherOptions" />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script setup>
defineProps({
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
  formItems: { type: Array }
})
</script>

<style lang="less">
.el-form {
  background-color: #e7ecf3;
}
</style>
