<template>
  <el-row class="login">
    <el-col :lg="16" :md="12" class="login_left">
      <div>
        <div class="text_A_left">欢迎光临</div>
        <div class="text_B_left">CommSys是一款一站式校园社团活动管理平台</div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="login_right">
      <h2>欢迎回来</h2>
      <div class="text_A_right">
        <span class="text_B_right"></span>
        <span>账号密码登录</span>
        <span class="text_B_right"></span>
      </div>
      <el-form :model="form" class="text fields">
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="请输入密码"/>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.region" placeholder="请输入你的职位">
            <el-option label="学生" value="shanghai" />
            <el-option label="社团管理员" value="beijing" />
            <el-option label="系统管理员" value="beig" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button round color="rgba(11,68,66,0.84)" class="buttonA" type="primary" @click="onSubmit">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script setup>
  import { reactive } from 'vue'

  // do not use same name with ref
  const form = reactive({
    username: '',
    password:'',
    region: '',
  })

  const onSubmit = () => {
    console.log('submit!')
  }
</script>
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
  flex-direction: column;
}
.text_A_left{
  font-weight: bold;
  font-size: 300%;
  margin-bottom: 4px;
  color: rgba(192,215,213);
}
.text_B_left{
  color: rgba(192,215,213);
}
h2{
  font-weight: bold;
  font-size: 220%;
  color: rgba(3,23,22,0.87);
}
.text_A_right{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  color:rgba(65,131,131,0.5);
}
.text_B_right{
  height: 1px;
  width: 30px;
  background-color: rgba(65,131,131,0.5);
  margin: 3px;
}
.text fields{
  width: 250px;
}
.buttonA{
  width: 250px;
}
</style>