<template>
  <el-row :gutter="10" style="margin-top: 10px;">
    <el-col :span="4" :offset="0">
      <el-card class="box-card" :body-style="{ padding: '5px' }">
        <div v-for="item in category" :key="item.id" class="text item cateitem">
          {{ item.name }}
        </div>
      </el-card>
    </el-col>
    <el-col :span="20">
      <el-card class="box-card">
        <el-row>
          <el-col :xs="12" :sm="8" :md="7" v-for="item in tabledata" :key="item.teamId" :offset="1">
            <div style="margin-top: 15px;">
              <el-card :body-style="{ padding: '5px' }" shadow="hover">
                <img class="image" :src="item.images" alt="">
                <div>
                  <strong style="font-size: 12px;">{{ item.clubName }}</strong>
                </div>
                <div class="bottom clearfix"><el-button @click="toDetail" class="button">查看</el-button></div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue';
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
const category = ref([
  {
    name:'书画协会',
    id:'1'
  },
  {
    name:'文体社团',
    id:'1'
  },
  {
    name:'学术社团',
    id:'1'
  },
  {
    name:'技术社团',
    id:'1'
  },
])
const tabledata = ref([
  {
    teamId:"1",
    clubName:"书画社",
    images:img1,
  },
  {
    teamId:"2",
    clubName:"手工社",
    images:img2,
  },
  {
    teamId:"3",
    clubName:"动漫社",
    images:img3,
  },
])
</script>

<style lang="scss" scoped>
.time {
  font-size: 10px;
  color: rgba(11,68,66,0.84);
}
.cateitem{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(11,68,66,0.84);
  text-align: center;
  cursor: pointer;
}
.bottom {
  margin-top: 5px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.image {
  width: 100%;
  height: 150px;
  display: block;
}
</style>