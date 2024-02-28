<template>
  <div class="box">
    <h1>svg test</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import request from '@/utils/request'

onMounted(() => {
  request({
    url: '/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111'
    }
  })
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
})
</script>

<style scoped lang="scss"></style>
