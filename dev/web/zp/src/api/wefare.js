/*
 * @Author: yepeng 
 * @Date: 2019-12-28 10:13:29 
 * @Last Modified by: yepeng
 * @Last Modified time: 2019-12-28 14:32:08
 */

import axios from '@/utils/axios'
/Welfare/deleteById
/**
 * 通过id删除福利信息
 * @param {Object} param {id:''} 
 */
export function deleteWelfareById(param) {
    return axios.post('/Welfare/deleteById', param);
  }

  /Welfare/findAll
/**
 * 查找所有福利信息
 */
export function findAllWelfare() {
    return axios.get('/Welfare/findAll');
  }
  /Welfare/findById
/**
 * 通过id查找福利信息
 * @param {Object} param{id:''}
 */
export function findWelfareById(param) {
    return axios.get('/Welfare/findById',{param:param});
  }
  /Welfare/saveOrUpdate
/**
 * 通过id查找福利信息
 * @param {Object} param
 */
export function saveOrUpdateWelfare(param) {
    return axios.post('/Welfare/saveOrUpdate',param);
  }
