/*
 * @Author: yepeng 
 * @Date: 2019-12-28 10:13:29 
 * @Last Modified by: yepeng
 * @Last Modified time: 2019-12-28 10:15:54
 */

import axios from '@/utils/axios'
/Welfare/deleteById
/**
 * 通过id删除省份信息
 * @param {Object} param {id:''} 
 */
export function deleteWelfareById(param) {
    return axios.post('/Welfare/deleteById', param);
  }