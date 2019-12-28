/*
 * @Author: liuyr 
 * 栏目管理页面
 * @Date: 2019-12-23 17:11:53 
 * @Last Modified by: yepeng
 * @Last Modified time: 2019-12-26 11:08:32
 */
<template>
  <div id="categoryManage">
      <!-- 左边下拉 -->
        <el-select v-model="value" placeholder="状态" size="mini">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <!-- 右边 -->
      <el-input placeholder="请输入关键字" v-model="input3" class="input-with-select" size="mini">
        <el-select v-model="select" slot="prepend" placeholder="关键字">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    <!-- 表格 -->
      <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="selectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="日期"
      width="120">
      <template slot-scope="scope">
        {{ scope.row.date }}
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
    <div id="page">
      <el-pagination
    background
    layout="prev, pager, next"
    :total="20">
     </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
  .el-input{
    width: 500px;
    float: right;
  }
  .el-select{
    width: 120px;
  }
  #page{
    text-align: right;
    margin-top: 10px;
  }
</style>