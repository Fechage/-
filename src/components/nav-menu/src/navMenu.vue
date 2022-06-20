<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="@/assets/logo.png" alt="logo" />
      <span class="title">CMS</span>
    </div>
    <!--  -->
    <el-menu
      :default-active="currentID"
      active-text-color="#3EAF7C"
      class="el-menu-vertical"
    >
      <template v-for="item in userMenuList" :key="item.id">
        <!-- 遍历有children的菜单 -->
        <template v-if="item.type === 1">
          <!-- 有下拉内容的一级菜单 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <span class="sub-menu">{{ item.name }}</span>
            </template>
            <!-- 下拉菜单的具体项目 -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemCLick(subitem)"
              >
                <span class="sub-menu-item">{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 只有具体项目的菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
    <!--  -->
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
// 从状态中拿到用户菜单列表
const userMenuList = computed(() => store.state.login.userMenuList)
// 刷新后拿到当前页面记录ID
const currentID = sessionStorage.getItem('currentID')
const handleMenuItemCLick = (subitem) => {
  router.push(subitem.url)
  sessionStorage.setItem('currentID', subitem.id)
}
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  width: 100%;
  .logo {
    display: flex;
    align-items: center;
    height: 28px;
    padding: 16px 0;
    border-bottom: 1px solid #eaecef;

    img {
      height: 100%;
      margin: 0 10px 0 50px;
    }

    .title {
      font-weight: 500;
      font-size: x-large;
      color: #2c3e50;
    }
  }
  .el-menu {
    border-right: none;
    .el-menu-item.is-active {
      border-left: 4px solid #3eaf7c !important;
    }

    .sub-menu {
      padding-left: 20px;
    }
    .sub-menu-item {
      padding-left: 10px;
    }
  }
}
</style>
