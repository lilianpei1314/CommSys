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
      <el-form :model="form" :rules="rules" ref="uerFormInst" class="text fields" @keydown.enter="onSubmit">
        <el-form-item prop="username">
          <el-input v-model="form.username" :prefix-icon="User" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" show-password v-model="form.password" :prefix-icon="Lock" placeholder="请输入密码"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" show-password v-model="form.confirmpassword" :prefix-icon="Lock" placeholder="请确认密码"/>
        </el-form-item>
        <el-form-item prop="region">
          <el-select v-model="form.region" placeholder="请输入你的职位">
            <el-option label="学生" value="Student" />
            <el-option label="社团管理员" value="Cluber" />
            <el-option label="系统管理员" value="Admin" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button round color="rgba(11,68,66,0.84)" class="buttonA" type="primary" @click="onSubmit">注 册</el-button>
        </el-form-item>
        <div class="register_A">
          <a @click="router.push('./login')" class="register_B">登录</a>
        </div>
      </el-form>
    </el-col>
  </el-row>
</template>
<script setup>
  import { ref,reactive } from 'vue'
  import {User,Lock} from '@element-plus/icons-vue'
  import {ElMessage} from 'element-plus'
  import router from '@/router'
import { useRouter } from 'vue-router'

  // do not use same name with ref
  const form = reactive({
    username: '',
    password:'',
    confirmpassword:'',
    region: 'Student',
  })

  const uerFormInst = ref(null)

  const onSubmit = () => {
    uerFormInst.value.validate((valid)=>{
      if(valid){
        if (form.password !== form.confirmpassword) {
          ElMessage.error('两次输入的新密码不相同')
          return false
        }

        const registerData = {
          username: form.username,
          password: form.password,
          region: form.region
        }
        request.post('@/pages/redister', registerData).then((res)=>{
          if (res.code === '200'){
            ElMessage.success('注册成功，请登录')
            router.push('./login')
          } else {
            ElMessage.error(res.msg || '注册失败')
          }
        }).catch(error => {
          console.error('注册请求错误', error)
          ElMessage.error('注册失败，请稍后重试')
        })
      }
    })
  }

  const rules = {
    username:[
      {required: true, message:'请输入用户名', trigger:'blur'},
      {min: 3, max: 10,message:'长度在3到10个字符',trigger:'blur'},
    ],
    password:[
      {required: true, message:'请输入密码', trigger:'blur'},
      {min: 1, max: 20,message:'长度在1到20个字符',trigger:'blur'},
    ],
    confirmpassword:[
      {required: true, message:'请确认密码', trigger:'blur'},
      {min: 1, max: 20,message:'长度在1到20个字符',trigger:'blur'},
    ],
    region:[
      {required: true,message:'请输入你的职位', trigger:'change'}
    ]
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
.register_A{
  float: right;

}
.register_B{
  font-size: 75%;
  color: rgba(11,68,66,0.84);
}
</style>