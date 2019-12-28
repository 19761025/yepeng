/*
 * @Author: liuyr 
 * 福利管理页面
 * @Date: 2019-12-23 17:11:53 
 * @Last Modified by: yepeng
 * @Last Modified time: 2019-12-28 10:16:17
 */
<template>
  <div id="moduleBoon">

    <el-select @change="welfareData" v-model="welfare" placeholder="请选择">
      <el-option
        v-for="item in welfareData"
        :key="item.id"
        :label="item.label"
        :value="item.value">
      </el-option>
  </el-select>
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