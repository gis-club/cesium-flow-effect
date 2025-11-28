<script setup lang="ts">
import { useNavigationStore } from '@/store/navigationStore'
import { onMounted, ref } from 'vue'
const navigation = useNavigationStore()
const navigationList = navigation.getItems.filter((item) => item.name !== 'MainLayout')

const rowCount = ref(1)
onMounted(() => {
  rowCount.value = Math.ceil(navigationList.length / 4)
})
</script>

<template>
  <el-row v-for="i in rowCount" :key="i">
    <el-col :span="6" v-for="obj in navigationList.slice((i - 1) * 4, i * 4)" :key="obj.id">
      <div class="base-example-item">
        <img class="base-example-icon" :src="obj.icon" alt="" />
        <router-link :to="obj.path" target="_blank" class="base-example-link">{{
          obj.name
        }}</router-link>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.base-example-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.base-example-icon {
  width: 300px;
  height: 300px;
}

.base-example-link {
  text-decoration: none;
  color: var(--el-text-color-regular);
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  display: block;
  text-align: center;
}
</style>
