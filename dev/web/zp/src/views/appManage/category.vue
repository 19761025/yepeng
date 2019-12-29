/*
 * @Author: liuyr 
 * 栏目管理页面
 * @Date: 2019-12-23 17:11:53 
 * @Last Modified by: yepeng
 * @Last Modified time: 2019-12-26 11:08:32
 */
<template>
  <div id="categoryManage">
      <div class="search">
        <el-select v-model="value" placeholder="状态" size="mini">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-input placeholder="请输入关键字" v-model="input4" class="input-with-select" size="mini">
          <el-select v-model="select" slot="prepend" placeholder="关键字">
            <el-option label="休息多" value="1"></el-option>
            <el-option label="包住" value="2"></el-option>
            <el-option label="包吃" value="3"></el-option>
            <el-option label="高薪资" value="4"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="table">
        <el-table
          :data="tableData"
          style="width: 100%">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
          <el-table-column
            prop="biaoqian"
            label="标签">
          </el-table-column>
          <el-table-column
            prop="staus"
            label="状态"
            width="180">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">停用</el-button>
            </template>
          </el-table-column>
        </el-table>
        
      </div>
      <div class="footer">
        <div id="page">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="20">
          </el-pagination>
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
       tableData: [{
            biaoqian: '高薪资',
            staus: '使用中'
          }, {
            biaoqian: '包吃',
            staus: '使用中'
          },{
            biaoqian: '包住',
            staus: '使用中'
          },{
            biaoqian: '休息多',
            staus: '使用中'
          }],

          options: [{
            value: '选项1',
            label: '使用中'
          },{
            value: '选项2',
            label: '未使用'
          }],
          value: ''
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
  .search{
    .el-input{
      width: 500px;
      float: right;
    }
    .el-select{
      width: 120px;
    }
  }
  .footer{
    #page{
      text-align: right;
      margin-top: 10px;
  }
  }

</style>