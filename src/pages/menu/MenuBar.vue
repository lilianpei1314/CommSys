<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    background-color="rgba(65,131,131,0.5)"
  >
    <MenuItem :menuList="menuList"></MenuItem>
  </el-menu>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import MenuItem from './MenuItem.vue';
import {User,Lock} from '@element-plus/icons-vue'
import {ElMessage} from 'element-plus'

const isCollapse = ref(false)
let menuList = reactive([
  {
    path:"/clubs",
    component:"Layout",
    name:"club",
    meta: {
      title:"社团相关",
      icon:"Notification",
      roles:["sys:manage"],
    },
    children: [
      {
        path:"/clubList",
        component:"/clubs/club/clubList",
        name:"clubList",
        meta: {
          title:"浏览社团",
          icon:"Notification",
          roles:["sys:club"],
        },
      },
      {
        path:"/addList",
        component:"/clubs/add/addList",
        name:"addList",
        meta: {
          title:"加入社团",
          icon:"Notification",
          roles:["sys:add"],
        },
      },
    ],
  },
  {
    path:"/activity",
    component:"Layout",
    name:"activity",
    meta: {
      title:"活动相关",
      icon:"Notification",
      roles:["sys:activity"],
    },
  }     
]);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 400px;
}

.el-menu {
  border-right: none;
}

.el-sub-menu__title {
  color: rgba(11,68,66,0.84) !important;
}

.el-menu .el-menu-item {
  color: rgba(11,68,66,0.84);
}

.el-menu-item.is-active {
  color: white !important;
}

.is-opened .el-menu-item {
  background-color: rgba(65, 131, 131, 0.25) !important;
}

.el-menu-item:hover {
  background-color: rgb(166, 203, 202);
}
</style>