<template>
  <div class="login-container">
    <div class="login-form">
      <h2 class="login-title">登录</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">账号</label>
          <input
            type="text"
            id="username"
            v-model="form.username"
            required
            placeholder="请输入账号"
          />
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            required
            placeholder="请输入密码"
          />
        </div>
        <div class="form-group">
          <button type="submit" @click="login">登录</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios"
import { ElMessage } from "element-plus"
import {reactive,ref} from "vue"
import {useRouter} from "vue-router"
import {useStore} from "vuex"
const store=useStore()
const router=useRouter()
const form=reactive({
    username:"",
    password:""
})
const list=ref([])
const login=async()=>{
    await axios.get("http://localhost:3006/user").then(res=>{
        console.log(res.data)
        list.value=res.data
        const user=list.value.find(item=>item.name === form.username && item.password === Number(form.password))
        if(user){
            router.push({"path":"/home"})
        }
    })
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 竖直方向居中 */
  background-color: #f5f5f5;
  width: 100vw;
}

.login-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  transform: translateX(-10%) translateY(-10%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.login-title {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 95%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-group button:hover {
  background-color: #0056b3;
}
</style>