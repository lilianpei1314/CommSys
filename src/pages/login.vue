<template>
  <el-row class="login">
    <el-col :span="16" class="login_left">
      <div>欢迎光临</div>
    </el-col>
    <el-col :span="8" class="login_right"></el-col>
  </el-row>
</template>
<style>
.login{
  min-height: 100vh;
  background-color: rgba(11,68,66,0.84);
}
.login_left{
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_right{
  background-color: rgba(192,215,213);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>