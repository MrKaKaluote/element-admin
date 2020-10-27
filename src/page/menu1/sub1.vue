
<template>
<div class="container-box">
  <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      <el-button v-throttle-click="[nodeClick, '666']">这是一个按钮</el-button>
  </el-tabs>
</div>
</template>
<script>
import {throttle} from '@/utils/throttle.js'
export default {
  data() {
    return {
        activeName: 'second'
    };
  },
  methods: {
    handleClick(tab, event) {
        console.log(tab, event);
    },
    nodeClick(...val) {
      console.log(222, val)
    }
  },
  mounted() {
    // window.addEventListener('mousemove', throttle(this.nodeClick, 1000, 666, 888))
  }
};
</script>

<style lang="css">
</style>
