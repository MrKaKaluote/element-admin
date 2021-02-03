<template lang="html">
  <div class="table-content">
    <div class='search-wrap'>
      <el-form :inline="true" :model="formInline" ref="dynamicValidateForm" size="mini" class="demo-form-inline">
        <el-form-item label="边界名称">
          <el-input v-model="formInline.user" clearable placeholder="输入边界名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <div class='btns'>
        <el-button @click="addDialog" size="mini" type="primary">创建</el-button>
        <el-button size="mini">编辑</el-button>
        <el-button size="mini" type="danger">删除</el-button>
      </div>
    </div>

    <!-- 表格 -->
    <el-table :data="tableData" size="mini" border style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="边界名称" width="180"></el-table-column>
      <el-table-column prop="manager" label="创建用户" width="180"></el-table-column>
      <el-table-column prop="group" label="用户分组"></el-table-column>
      <el-table-column prop="time" label="创建时间"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
    </el-table>

    <!-- 弹窗 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose">
        <el-row>
          <el-col :span="12"><div class="dialog-map"></div></el-col>
          <el-col :span="12">
            <div class="">
              <el-form ref="form" size="mini" :model="form" label-width="80px">
                <el-form-item label="边界名称">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item label="约束时间">
                  <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="1">-</el-col>
                  <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
                  </el-col>
                </el-form-item>

                <el-form-item label="状态">
                  <el-radio-group v-model="form.resource">
                    <el-radio label="开启"></el-radio>
                    <el-radio label="关闭"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-form>
              <div class='choose-user'>
                <div class='choose-label'>选择用户</div>
                <el-tree
                  :data="data"
                  show-checkbox
                  node-key="id"
                  :default-expanded-keys="[2, 3]"
                  :default-checked-keys="[5]"
                  :props="defaultProps">
                </el-tree>
              </div>
            </div>
          </el-col>
        </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 分页 -->
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
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      dialogVisible: false,
      totalPage: 1,
      formInline: {
        user: '',
        region: ''
      },
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      tableData: [
        {
          manager: "小鸡",
          name: "广东",
          group: "1518",
          time: '2021-02-02 10:08:09',
          status: '开启'
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
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    onSubmit() {},
    addDialog() {
      this.dialogVisible = true
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
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
.search-wrap{
  display: flex;
  justify-content: space-between;
  .btns{
    margin-right: 20px;
  }
}
.dialog-map{
  width: 300px;
  height: 300px;
  border: 1px solid #333333;
}
.choose-user{
  display: flex;
  .choose-label{
    width: 60px;
    padding-left: 14px;
  }
}
</style>
