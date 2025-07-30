<template>
  <el-container class="container">
    <el-header class="header">
      <logo></logo>
      <tabs></tabs>
      <loginout></loginout>
    </el-header>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import logo from '@/pages/layout/logo.vue';
import tabs from '@/pages/layout/tabs.vue';
import loginout from './loginout.vue';
import home from '../home/home.vue';
</script>

<style lang="scss" scoped>
.container{
  height: 100%;
  .header{
    background-color: rgba(11,68,66,0.84);
    display: flex;
    align-items: center;
    padding: 0px;
  }

  .main{
    background-color: rgba(192,215,213,0.1);
    padding: 0px 200px 0px 200px;
  }
}
</style>