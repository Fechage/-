<template>
  <div class="table">
    <el-table :data="userList" border style="width: 100%">
      <template v-for="item in propList" :key="item.prop">
        <el-table-column v-bind="item" align="center">
          <!--  -->
          <template #default="statu">
            <slot :name="item.slotName" :row="statu.row">
              {{ statu.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script setup>
defineProps({ userList: Array, propList: Object })
</script>

<style></style>
