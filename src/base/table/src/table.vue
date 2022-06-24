<template>
  <div class="table">
    <div class="header">
      <h2>{{ title }}</h2>
      <el-button type="primary">新建用户</el-button>
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
        :page-sizes="[100, 200, 300, 400]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  userList: Array,
  propList: Object,
  showIndex: { type: Boolean, default: false },
  showSelect: { type: Boolean, default: false }
})
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
