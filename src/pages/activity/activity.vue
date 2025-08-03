<template>
  <div class="news-container">
    <div class="news-item" v-for="(item,index) in newList" :key="index">
      <el-image v-if="item.image" class="images" :src="item.image" fit="cover"/>
      <div class="news-intr">
        <div class="news-title">
          <span>{{ item.name }}</span>
          <div class="news-info">
            <div class="news-time">
              <span>{{ item.create_Time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <el-pagination style="margin-top: 15px;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="parm.currentPage"
      :page-size="parm.pageSize"
      :page-sizes="[1,10,20,40,80,100]"
      layout="total,sizes, prev, pager, next,jumper"
      :total="parm.total" background>
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
.news-container {
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}
.news-item{
  display: flex;
  margin-bottom: 15px;
  padding: 25px 0px;
  border-bottom: 1px solid #e4e7ed;
  cursor: pointer;
  &:hover{
    background-color: #f9fafc;
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
  &:last-child{
    border-bottom: none;
    margin-bottom: 0;
  }
  .images{
    height: 120px;
    width: 180px;
    min-width: 180px;
    border-radius: 8px;
    margin-right: 20px;
    object-fit: cover;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  .news-intr{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .news-title{
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin-bottom: 15px;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .news-info{
      display: flex;
      align-items: center;
      .news-time{
        text-align: left;
        font-size: 14px;
        color: #999;
        padding: 4px 10px;
        background: #f5f7fa;
        border-radius: 4px;
      }
    }
  }
}
</style>