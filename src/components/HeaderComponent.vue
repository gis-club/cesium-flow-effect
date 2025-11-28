<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { Sunny, Moon } from '@element-plus/icons-vue'

const isDark = useDark()
</script>

<template>
  <el-row>
    <el-col :span="8">
      <div class="grid-content ep-bg-purple" />
    </el-col>
    <el-col :span="8">
      <div class="grid-content ep-bg-purple-light" />
    </el-col>
    <el-col :span="8">
      <el-switch
        ref="switchRef"
        size="large"
        v-model="isDark"
        :active-action-icon="Moon"
        :inactive-action-icon="Sunny"
      />
    </el-col>
  </el-row>
</template>
