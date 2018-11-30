<template>
  <div class="tab-content">
    <el-row class="button-box">
      <el-button size="mini">默认按钮</el-button>
      <el-button type="primary" size="mini">主要按钮</el-button>
      <el-button type="success" size="mini">成功按钮</el-button>
      <el-button type="info" size="mini">信息按钮</el-button>
      <el-button type="warning" size="mini">警告按钮</el-button>
      <el-button type="danger" size="mini">危险按钮</el-button>
    </el-row>

    <el-row class="button-box">
      <el-button plain size="mini">朴素按钮</el-button>
      <el-button type="primary" plain size="mini">主要按钮</el-button>
      <el-button type="success" plain size="mini">成功按钮</el-button>
      <el-button type="info" plain size="mini">信息按钮</el-button>
      <el-button type="warning" plain size="mini">警告按钮</el-button>
      <el-button type="danger" plain size="mini">危险按钮</el-button>
    </el-row>

    <el-row class="button-box">
      <el-button round size="mini">圆角按钮</el-button>
      <el-button type="primary" round size="mini">主要按钮</el-button>
      <el-button type="success" round size="mini">成功按钮</el-button>
      <el-button type="info" round size="mini">信息按钮</el-button>
      <el-button type="warning" round size="mini">警告按钮</el-button>
      <el-button type="danger" round size="mini">危险按钮</el-button>
    </el-row>

    <el-row class="button-box">
      <el-button icon="el-icon-search" circle size="mini"></el-button>
      <el-button type="primary" icon="el-icon-edit" circle size="mini"></el-button>
      <el-button type="success" icon="el-icon-check" circle size="mini"></el-button>
      <el-button type="info" icon="el-icon-message" circle size="mini"></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle size="mini"></el-button>
      <el-button type="danger" icon="el-icon-delete" circle size="mini"></el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "second"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/css/them.scss";
.tab-content{
    margin-top: 20px;
    .button-box{
        margin: 50px;
    }
}
</style>