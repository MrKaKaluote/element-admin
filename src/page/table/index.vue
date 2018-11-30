<template>
    <div class="container-box">
      <el-row>
        <!-- <el-col :span="24">
          <ve-line :data="chartData" :settings="chartSettings"></ve-line>
        </el-col> -->
        <!-- <el-col :span="12">
          <ve-radar :data="chartData3"></ve-radar>
        </el-col> -->
      </el-row>
      <el-row>
        <el-col :span="10">
          <ve-map :data="chartData1"></ve-map>
        </el-col>
        <el-col :span="12">
          <ve-liquidfill :data="chartData2"></ve-liquidfill>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  data() {
    return {
      chartSettings:{
        backgroundColor: "#cccccc"
      },
      chartData: {
        columns: ["日期", "销售额"],
        rows: [
          { 日期: "1月1日", 销售额: 123 },
          { 日期: "1月2日", 销售额: 1223 },
          { 日期: "1月3日", 销售额: 2123 },
          { 日期: "1月4日", 销售额: 4123 },
          { 日期: "1月5日", 销售额: 3123 },
          { 日期: "1月6日", 销售额: 7123 }
        ]
      },
      chartData1: {
        columns: ["位置", "税收", "人口", "面积"],
        rows: [
          { 位置: "吉林", 税收: 123, 人口: 123, 面积: 92134 },
          { 位置: "北京", 税收: 1223, 人口: 2123, 面积: 29234 },
          { 位置: "上海", 税收: 2123, 人口: 1243, 面积: 94234 },
          { 位置: "浙江", 税收: 4123, 人口: 5123, 面积: 29234 }
        ]
      },
      chartData2: {
        columns: ["city", "percent"],
        rows: [
          {
            city: "上海",
            percent: 0.6
          }
        ]
      },
      chartData3: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
    };
  },
  created() {
    
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/css/them.scss";
.container-box{
    
}
</style>