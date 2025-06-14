<!-- 注释 -->
<template>
<div class='content'>
    <div class="common-layout">
    <el-container class="container">
      <elAside class="elAside" :style="{width:store.state.isCollapse?'70px':'200px'}" v-if="$route.path!=='/login'"/>
      <el-container class="right">
        <elHeader class="elHeader" v-if="$route.path!=='/login'"/>
        <router-view v-if="$route.path!=='/login'" class="routePath"></router-view>
        <div v-else>
            <login/>
        </div>
      </el-container>
    </el-container>
  </div>



</div>
</template>
<script setup>
import elAside from "../components/aside"
import elHeader from "../components/header"
import login from "../views/paths/login.vue"
import {useStore} from "vuex"
const store=useStore()
</script>
<style scoped lang="scss">
.content{
    height: 100vh;
    .common-layout{
        height: 100%;
        .container{
            display: flex;
            .elAside{
                width: 200px;
                transition: width 0.3s;
                height: 100vh;
                :deep(.el-menu){
                    height: 100%;
                }
            }
            .right{
                display: flex;
                flex-direction: column;
                flex:1;
                .elHeader{
                    height: 50px;
                }
                .routePath{
                    flex:1
                }
            }
        }
    }
}





</style>


