<template>
  <div class="table">
    <div class="header">
      <h2>{{ title }}</h2>
      <!-- 新建用户 -->
      <slot name="headerHandle"></slot>
    </div>
    <el-table
      :data="userList"
      :highlight-current-row="true"
      style="width: 100%"
      border
    >
      <!-- 勾选栏 -->
      <el-table-column
        v-if="showSelect"
        type="selection"
        align="center"
        width="60"
      >
      </el-table-column>
      <!-- 序号栏 -->
      <el-table-column
        v-if="showIndex"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <!-- 其他 -->
      <template v-for="item in propList" :key="item.prop">
        <el-table-column
          :show-overflow-tooltip="true"
          v-bind="item"
          align="center"
        >
          <!-- 状态插槽 -->
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 分页 -->
    <div class="pagination">
      <el-pagination
        v-model:current-page="page.currentPage"
        v-model:page-size="page.pageSize"
        :page-sizes="[10, 20, 30]"
        :total="totalCount"
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        hide-on-single-page
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  userList: Array,
  propList: Object,
  totalCount: Number,
  page: Object,
  showIndex: { type: Boolean, default: false },
  showSelect: { type: Boolean, default: false }
})
const emits = defineEmits(['update:page'])
const handleCurrentChange = (current) => {
  console.log(current)
  emits('update:page', { ...props.page, currentPage: current })
}
const handleSizeChange = (pageSize) => {
  emits('update:page', { ...props.page, pageSize })
}
</script>

<style lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>
