<template>
  <el-dropdown style="padding: 0px 20px; cursor: pointer;">
    <span class="el-dropdown-link">
      <img class="usering" src="@/assets/user.webp"
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.usering{
  height: 38px;
  width: 38px;
  border-radius: 100%;
}
</style>