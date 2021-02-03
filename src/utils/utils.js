/*
 * @Description:各工具类方法
 * @Autor: GaoSong
 * @Date: 2021-01-02 13:36:30
 * @LastEditors: GaoSong👉😜👈
 * @LastEditTime: 2021-01-10 17:42:23
 */

/**
 * @description: 判断是否是某种类型的数据
 * @param {*} null
 * @return {Object} _type
 * _typeof.isNumeric(num)
 */
export const _typeof = (() => {
  var _obj = {
    isNumeric: 'Number',
    isBoolean: 'Boolean',
    isString: 'String',
    isNull: 'Null',
    isUndefined: 'Undefined',
    isSymbol: 'Symbol',
    isPlainObject: 'Object',
    isArray: 'Array',
    isRegExp: 'RegExp',
    isDate: 'Date',
    isFunction: 'Function',
    isWindow: 'Window'
  }

  var _toString = _obj.toString

  var _type = {}
  for (var key in _obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (!_obj.hasOwnProperty(key)) break
    _type[key] = (function() {
      var reg = new RegExp('^\\[object ' + _obj[key] + '\\]$')
      return function anonymous(val) {
        return reg.test(_toString.call(val))
      }
    })()
  }
  return _type
})()


/** 节流函数 */
export function throttle(fun, wait, ...args) {
  let timer = null; let remainingTime = 0; let preTime = 0
  if (!wait) wait = 500
  return function proxy() {
    const nowTime = new Date()
    remainingTime = wait - (nowTime - preTime)
    if (remainingTime <= 0) {
      clearTimeout(timer)
      timer = null
      preTime = new Date()
      fun.call(this, ...arguments, ...args)
    } else if (!timer) {
      timer = setTimeout(() => {
        clearTimeout(timer)
        timer = null
        preTime = new Date()
        fun.call(this, ...arguments, ...args)
      }, remainingTime)
    }
  }
}
