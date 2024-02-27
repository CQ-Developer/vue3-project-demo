<template>
  <div>
    <p>this is app</p>
    <el-button type="primary" :icon="Plus">主要按钮</el-button>
    <el-button type="success" :icon="Edit">编辑按钮</el-button>
    <el-button type="danger" :icon="Delete">删除按钮</el-button>
    <el-pagination
      :page-size="100"
      :small="true"
      :disabled="false"
      :background="true"
      layout="total, prev, pager, next"
      :total="1000"
    />
  </div>
</template>

<script setup lang="ts">
import { Plus, Edit, Delete } from '@element-plus/icons-vue'
</script>

<style scoped></style>
