<template>
  <el-carousel height="500px">
    <el-carousel-item  v-for="item in swipperList" :key="item">
      <el-image style="height: 500px;width: 100%;object-fit: cover;" :src="item.url" />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
import {ref} from "vue";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";

const swipperList = ref([
  {url:img1},
  {url:img2},
  {url:img3},
  {url:img4}
])
</script>

<style lang="scss" scoped>

</style>