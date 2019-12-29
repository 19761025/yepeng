/*
 * @Author: liuyr 
 * 权限列表页面
 * @Date: 2019-12-23 17:11:53 
 * @Last Modified by: yepeng
 * @Last Modified time: 2019-12-26 11:32:57
 */
<template>
  <div id="limitList">
    <div class="search">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select> 
    </div>
    <div classs="table">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="name"
          label="角色"
          width="100"
          >
        </el-table-column>
        <el-table-column
          prop="quanxian"
          label="权限"
          width="600">
          <el-button @click="toEdit" type="text" size="small">修改</el-button>
        </el-table-column>
        <el-table-column
          prop="staus"
          label="状态"
          >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            <!-- <el-button type="text" size="small">编辑</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
       tableData: [{
            name: '客服',
            quanxian: '求职联系、商家管理',
            staus: '启用中'
          },{
            name: '管理员',
            quanxian: '用户管理、招聘管理、商家管理',
            staus: '启用中'
          }],
        options: [{
          value: '选项1',
          label: '启用中'
        },{
          value: '选项2',
          label: '未启用'
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
<style scoped>
</style>