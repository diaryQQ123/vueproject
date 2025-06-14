<!-- 注释 -->
<template>
  <div class="content">
    <div class="left">
      <el-icon :size="30" @click="alterStatus"><Fold /></el-icon>
      <div>用户名 {{ store.state.isCollapse }}</div>
    </div>
    <div class="right">
      <el-dropdown>
        <span class="el-dropdown-link">
          Dropdown List
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { mapState, mapMutations, useStore } from "vuex";
const store = useStore();
const alterStatus = () => {
  store.commit("alterStatus");
};
</script>
<style scoped lang="scss">
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    margin-left: 20px;
    display: flex;
    .el-icon {
      margin-right: 30px;
    }
  }
  .right {
    margin-right: 20px;
    :deep(.el-tooltip__trigger:focus-visible) {
      outline: unset;
    }
  }
}
</style>