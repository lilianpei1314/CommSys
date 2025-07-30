<template>
  <el-row :gutter="10">
    <el-col class="carousel" :span="24">
      <el-card>
        <template #header>
          <div class="card-header">
            <span>推荐</span>
          </div>
        </template>
        <div >
          <swipper></swipper>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <el-row :gutter="10">
    <el-col class="carousel" :span="24">
      <el-card>
        <template #header>
          <div class="card-header">
            <span>公告</span>
          </div>
        </template>
        <div class="notice" v-for="(item,index) in noticeList">
          <div class="title">{{ index+1 +","+item.title }}</div>
          <div class="date">{{ item.createTime }}</div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import {ref} from 'vue';
import swipper from './swipper.vue';
const noticeList = ref([
  {
    title:'编程社最新公告',
    createTime:'2025-02-10'
  },
  {
    title:'编程社最新公告',
    createTime:'2025-02-09'
  },
  {
    title:'音乐社最新公告',
    createTime:'2025-02-07'
  }
])
</script>

<style lang="scss" scoped>
.carousel{
  padding: 5px;
}
.card-header {
  display:flex;
  justify-content:space-between;
  align-items: center;
  height: 8px;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.notice {
  cursor: pointer;
  display: flex;
  height: 30px;
  line-height: 30px;
  .title{
    font-size: 14px;
    font-weight: 600;
    color:#666666;
  }
  .date{
    font-size: 14px;
    margin-left: 20px;
  }
}
</style>