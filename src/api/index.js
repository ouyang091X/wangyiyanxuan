/*
包含n个接口请求函数的模块
 */

import ajax from './ajax'

export const reqClassify = () => ajax('/category_data')
export const reqShiwu = () => ajax('/shiwu_data')
export const reqHome = () => ajax('/home_data')
