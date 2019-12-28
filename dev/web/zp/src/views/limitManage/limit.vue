/*
 * @Author: liuyr 
 * 权限列表页面
 * @Date: 2019-12-23 17:11:53 
 * @Last Modified by: yepeng
 * @Last Modified time: 2019-12-26 11:32:57
 */
<template>
  <div id="limitList">
    <el-select v-model="value" clearable placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="user"
      label="角色"
      width="180">
    </el-table-column>
    <el-table-column
      prop="power"
      label="权限"
      width="180">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态">
    </el-table-column>
        <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
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
</style>