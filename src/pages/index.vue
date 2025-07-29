<template>
  <div class="common-layout">
    <el-container class="part">
      <el-aside width="200px">
        <MenuBar></MenuBar>
      </el-aside>
      <el-container class="Header">
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
  import Header from './header/Header.vue';
  import MenuBar from './menu/MenuBar.vue';
  import {User,Lock} from '@element-plus/icons-vue'
  import {ElMessage} from 'element-plus'
</script>
<style>
.part{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
}
.Header{
  height: 100%;
}
.el-header{
  background-color: rgba(11,68,66,0.84);
  color: #333;
}
.el-aside{
  background-color:rgb(166,203,202);
  color: #333;

}
.el-main{
  background-color:rgb(192,215,213);
  color: #333;

}

</style>