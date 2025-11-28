<script lang="ts" setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <el-container class="main-layout">
    <el-header class="main-header">
      <HeaderComponent />
    </el-header>
    <el-main class="main-content">
      <router-view />
    </el-main>
    <el-footer class="main-footer">
      <FooterComponent />
    </el-footer>
  </el-container>
</template>
<style lang="scss" scoped>
.main-layout {
  width: 100%;
  height: 100%;
}

.main-header {
  padding: 0;
  background-color: var(--el-color-info-dark-2);
}
.main-content {
  overflow: auto;
}
.main-footer {
  padding: 0;
  background-color: var(--el-color-info-dark-2);
}
</style>
