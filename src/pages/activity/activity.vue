<template>
  <view class="news-item" v-for="(item,index) in newList" :key="index">
    <view v-if="item.image">
      <el-image class="images" :src="item.image"/>
    </view>
    <view class="news-intr">
      <view class="news-title">
        <text>{{ item.name }}</text>
      </view>
      <view class="news-info">
        <view class="news-time">
          <text>{{ item.create_Time }}</text>
        </view>
      </view>
    </view>
  </view>
  <el-pagination
      :current-page="parm.currentPage"
      :page-size="parm.pageSize"
      :page-sizes="[1,10,20,40,80,100]"
      layout="total,sizes, prev, pager, next,jumper"
      :total="parm.total" background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      style="margin-top: 15px;">
      </el-pagination>
</template>

<script setup>
import {ref,reactive} from "vue";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";

const newList = ref([
  {
    create_Time:"2025-08-01",
    image:img1,
    name:"学党史，听党话！"
  },
  {
    create_Time:"2025-08-01",
    image:img2,
    name:"学党史，听党话！"
  },
  {
    create_Time:"2025-08-01",
    image:img3,
    name:"学党史，听党话！"
  },
  {
    create_Time:"2025-08-01",
    image:img4,
    name:"学党史，听党话！"
  },
])
const parm = reactive({
  currentPage:1,
  pageSize:10,
  total:10,
})
const handleSizeChange = (size)=>{

}
const handleCurrentChange = (page)=>{

}

</script>

<style lang="scss" scoped>
.news-item{
  display: flex;
  height: 10px;
  padding: 30px 0px;
  border-bottom: 1px solid #e4e7ed;
  cursor: pointer;
  .images{
    height: 100px;
    width: 200px;
    border-radius: 10px;
  }
  .news-intr{
    margin-left: 15px;
    .news-info{
      display: flex;
      font-size: 28px;
      color: #999999;
      margin-left: 16px;
      .news-time{
        text-align: left;
      }
    }
  }
}
</style>