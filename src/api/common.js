import {fetch, fetchapi, baseUrl} from 'config/index.js'
/**
 * 会员登陆
 * @param params
 * @returns {*}
 */
export function loginUserNo(params) {
  return fetch(`${baseUrl}root/LoginController/doLogin?userName=${params.userName}&password=${params.password}`, params)
}