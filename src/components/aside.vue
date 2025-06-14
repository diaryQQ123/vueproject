<!-- 注释 -->
<template>
  <div class="content">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :router="true"
    >
      <h2 class="mb-2">菜单</h2>
      <el-sub-menu index="/">
        <template #title>
          <el-icon><location /></el-icon>
          <span>首页</span>
        </template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/course">
        <el-icon><icon-menu /></el-icon>
        <span>课程管理</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <el-icon><document /></el-icon>
        <span>用户管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const isCollapse = computed(() => store.state.isCollapse);
</script>
<style scoped lang="scss">
.content {
  .mb-2 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
  }
}
</style>