<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script setup>
import LoginPanel from './components/login-panel.vue'
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
