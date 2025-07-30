<template>
  <view class="news-item" v-for="(item,index) in newList" :key="index">

  </view>
</template>

<script setup>
import {ref,reactive} from "vue";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";

const newList = ref([

])
const parm = reactive({
  currentPage:1,
  pageSize:10,
  total:10,
})

</script>

<style lang="scss" scoped>

</style>