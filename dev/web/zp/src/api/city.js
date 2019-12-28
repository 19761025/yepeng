/*
 * @Author: yepeng 
 * @Date: 2019-12-25 09:47:09 
 * @Last Modified by: yepeng
 * @Last Modified time: 2019-12-25 14:42:31
 */

import axios from '@/utils/axios'
/**
 * 通过id删除城市信息
 * @param {Object} param {id:''} 
 */
export function deleteCityById(param) {
  return axios.post('/City/deleteById', param);
}
/**
 * 查找所有城市信息
 */
export function findAllCity() {
  return axios.get('/City/findAll');
}
/**
 * 通过id查找城市信息
 * @param {Object} param {id:''}
 */
export function findCityById(param) {
  return axios.get('/City/findById', {params: param});
}
/**
 * 通过省份id查找城市信息
 * @param {Object} param {provinceId:''}
 */
export function findCityByProvinceId(param) {
  return axios.get('/City/findByProvinceId', {params: param});
}
/**
 * 保存或更新城市信息
 * @param {Object} param
 */
export function saveOrUpdateCity(param) {
  return axios.post('/City/saveOrUpdate', param);
}
