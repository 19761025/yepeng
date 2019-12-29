/*
 * @Author: liuyr 
 * 招聘审核页面
 * @Date: 2019-12-23 17:11:53 
 * @Last Modified by: yepeng
 * @Last Modified time: 2019-12-28 17:27:26
 */
<template>
  <div id="recruitCheck">
    
    <div class="Search">
      <el-select size="mini" v-model="jobType" placeholder="职位类型">
      <el-option
        v-for="item in findAllEmployment"
        :key="item.id"
        :label="item.name"
        :value="item.name">
      </el-option>
      </el-select>

      <el-input placeholder="请选择关键字" v-model="input3" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="关键字">
          <!-- <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option> -->
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
          align="center"
          prop="title"
          label="招聘标题">
        </el-table-column>
        <el-table-column
          align="center"
          prop="contact_name"
          label="发布人">
        </el-table-column>
        <el-table-column
          align="center"
          prop="contact_phone"
          label="联系方式">
        </el-table-column>
        <el-table-column
          align="center"
          prop="job"
          label="岗位">
        </el-table-column>
        <el-table-column
          prop="publish_time"
          label="发布时间"
          align="center"
          >
        </el-table-column>
        <el-table-column align="center" label="详情">
          <template slot-scope="scope">
            <el-button @click="toSee(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" @click="toEdit(scope.row)" size="small">编辑</el-button>
            <el-button type="text" size="small" @click="toDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="foot">
      <el-button type="success" plain>一键通过</el-button>
      
    </div>
    <!-- 查看模态框 -->
    <!-- <el-dialog :title="currentBus.name" :visible.sync="seeVisible">
      <div class="seeDiv">
        <span>行业类型：</span>
        {{currentBus.industry}}
      </div>
      <div class="seeDiv">
        <span>成立时间：</span>
        {{currentBus.establishedTime}}
      </div>
      <div class="seeDiv">
        <span>注册资本：</span>
        {{currentBus.registeredCapital}}
      </div>
      <div class="seeDiv">
        <span>公司规模：</span>
        {{currentBus.scale}}
      </div>
      <div class="descDiv">&nbsp;&nbsp;&nbsp;&nbsp;{{currentBus.description}}</div>
      <div class="imgDiv">
        <a :href="currentBus.businessLicense" target="_blank">
          <img :src="currentBus.businessLicense" alt width="200" height="150" />
        </a>
      </div>
    </el-dialog> -->
  </div>
</template>

<script>
import { findAllEmployment,findEmploymentByJob } from "@/api/jobtype.js"
export default {
  data() {
    return {
      //标题
      title:'',
      //发布人
      contact_name:'',
      //联系方式
      contact_phone:'',
      //职位
      job:'',
      //发布时间
      publish_time:'',
      //职位类型信息
      jobTypeData:[]
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.Search{
  .el-input{
    width: 500px;
    float: right;
  }
  .el-select{
    width: 120px;
  }
}
</style>