import {
  reqClassify,
  reqHome,
  reqShiwu
} from '../api'

import {
  RECEIVE_CLASSIFYDATA,
  RECEIVE_HOMEDATA,
  RECEIVE_SHIWUDATA
} from './mutation-types'

export default {
  async getClassifyData ({commit},cb) {
    const result =  await  reqClassify()
    if(result.code===0) {
      const category_data = result.data
      commit(RECEIVE_CLASSIFYDATA,{category_data})
      typeof cb === 'function' && cb()

    }
  },
  async getShiwuData ({commit},cb) {
    const result =  await  reqShiwu()
    if(result.code===0) {
      const shiwu_data = result.data
      commit(RECEIVE_SHIWUDATA,{shiwu_data})
      typeof cb === 'function' && cb()
    }
  },
  async getHomeData ({commit},cb) {
    const result =  await  reqHome()
    if(result.code===0) {
      const home_data = result.data
      commit(RECEIVE_HOMEDATA,{home_data})
      typeof cb === 'function' && cb()

    }
  },
}
