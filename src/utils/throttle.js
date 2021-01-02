/*
 * @Description: 节流函数，妹子镇楼
 * @Autor: GaoSong
 * @Date: 2020-10-27 09:18:50
 * @LastEditors: GaoSong
 * @LastEditTime: 2020-10-27 15:54:05
 *
 *
 *                        .::::.
 *                      .::::::::.
 *                     :::::::::::
 *                  ..:::::::::::'
 *               '::::::::::::'
 *                 .::::::::::
 *            '::::::::::::::..
 *                 ..::::::::::::.
 *               ``::::::::::::::::
 *                ::::``:::::::::'        .:::.
 *               ::::'   ':::::'       .::::::::.
 *             .::::'      ::::     .:::::::'::::.
 *            .:::'       :::::  .:::::::::' ':::::.
 *           .::'        :::::.:::::::::'      ':::::.
 *          .::'         ::::::::::::::'         ``::::.
 *      ...:::           ::::::::::::'              ``::.
 *     ````':.          ':::::::::'                  ::::..
 *                        '.:::::'                    ':'````..
 */

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
