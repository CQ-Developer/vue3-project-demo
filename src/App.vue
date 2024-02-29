<template>
  <div class="box">
    <h1>app root component</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { reqLogin } from '@/api/user'

onMounted(() => {
  reqLogin({ username: 'admin', password: '111111' }).then((resp) =>
    console.log('@', resp.code)
  )
})
</script>

<style scoped lang="scss"></style>
