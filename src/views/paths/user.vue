<!-- 注释 -->
<template>
  <div class="content">
    <el-table :data="data.tableData" border style="width: 100%">
      <el-table-column prop="name" label="name" width="180" />
      <el-table-column prop="age" label="age" width="180" />
      <el-table-column prop="email" label="email" width="300"/>
      <el-table-column prop="address.city" label="address" />
    </el-table>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import { getData } from "@/axios/user";
import {useStore} from "vuex"
const store=useStore()
const data = reactive({
  tableData: [],
  total: null,
});
const getUserData=async()=>{
    await getData().then(res=>{
        if(res!=null){
            store.dispatch("storeUser",res)
            console.log(store.state.userList)
            data.tableData=res
        }
    })

}
onMounted(()=>{
    getUserData()
})
</script>
<style scoped lang="scss">
.content {
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  .el-table {
    width: 100%;
    margin: 20px;
  }
  @media (min-width: 768px) {
    width: calc(100% - 40px);
  }
}
</style>