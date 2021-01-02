/*
 * @Description:各工具类方法
 * @Autor: GaoSong
 * @Date: 2021-01-02 13:36:30
 * @LastEditors: GaoSong👉😜👈
 * @LastEditTime: 2021-01-02 14:31:32
 */

/** 判断是否是某种类型的数据 */
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
