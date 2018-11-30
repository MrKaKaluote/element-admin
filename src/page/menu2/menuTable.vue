<template lang="html">
  <div class="table-content">

    <el-table :data="tableData" size="mini" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <pagination
      @sendPageSize="receivePageSize"
      @sendCurrentPage="receiveCurrentPage"
      :totalPage="totalPage"
    ></pagination>
  </div>
</template>

<script>
import pagination from "common/pagination";
export default {
  data() {
    return {
      totalPage: 300,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    receivePageSize(val) {
      console.log(val);
    },
    receiveCurrentPage(val) {
      console.log(val);
    }
  },
  components: {
    pagination
  }
};
</script>

<style scoped lang="scss">
.table-content{
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>