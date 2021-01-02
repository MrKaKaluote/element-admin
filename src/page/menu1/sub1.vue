<!--
 * @Description:
 * @Autor: GaoSong
 * @Date: 2021-01-02 12:29:38
 * @LastEditors: GaoSong👉😜👈
 * @LastEditTime: 2021-01-02 14:49:48
-->

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
import { _typeof } from '@/utils/utils.js'
export default {
  data() {
    return {
      activeName: 'second'
    }
  },
  mounted() {
    const num = 666
    console.log(_typeof.isNumeric(num))
    // window.addEventListener('mousemove', throttle(this.nodeClick, 1000, 666, 888))
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    nodeClick(...val) {
      console.log(222, val)
    }
  }
}
</script>

<style lang="css">
</style>
