/*
 * @Description: 注册全局自定义指令
 * @Autor: GaoSong
 * @Date: 2020-10-27 12:52:56
 * @LastEditors: GaoSong
 * @LastEditTime: 2020-10-27 15:53:53
 */
import {throttle} from '@/utils/throttle.js'
import Vue from 'vue'

const Directives = {
  install() {
    this.initThrottle() // 初始化节流函数
  },
  initThrottle() {
    Vue.directive('throttle-click', {
      inserted: (el, biding) => {
        const wait = biding.arg || 500
        if (Array.isArray(biding.value)) {
          const [fun, ...args] =  biding.value
          el.addEventListener('click', throttle(fun, wait, ...args))
        } else {
          const fun =  biding.value
          const wait = biding.arg || 500
          el.addEventListener('click', throttle(fun, wait))
        }
      }
    })
  }
}

export default Directives

