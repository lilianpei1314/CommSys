<template>
  <div class="tabs">
    <div @click="tabClick(item)" v-for="(item,index) in tabs" :class="{'active-item': item.value == activeName}" class="item">{{ item.title }}</div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const activeName = ref("home");
const tabs = ref([
  {
    title:"首页",
    value:"home",
  },
  {
    title:"社团列表",
    value:"club",
  },
  {
    title:"活动列表",
    value:"activity",
  },
  {
    title:"个人中心",
    value:"mine",
  },
])
const tabClick = (item:any)=>{
  activeName.value = item.value
  router.push({name:item.value})
}
</script>

<style lang="scss" scoped>
.tabs{
  display: flex;
  flex-grow: 1;
  font-weight: 600;
  margin-left: 80px;
  .item{
    padding: 0px 30px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    height: 60px;
    line-height: 60px;
  }
  .active-item{
    padding: 0px 30px;
    text-align: center;
    color: rgba(11,68,66,0.84);
    font-size: 16px;
    cursor: pointer;
    height: 60px;
    line-height: 60px;
    background-color: #fff;
    border-bottom: 5px solid rgba(11,68,66,0.84);
  }
}
</style>