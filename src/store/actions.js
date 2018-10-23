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
  async getClassifyData ({commit}) {
    const result =  await  reqClassify()
    if(result.code===0) {
      const category_data = result.data
      commit(RECEIVE_CLASSIFYDATA,{category_data})
    }
  },
  async getShiwuData ({commit}) {
    const result =  await  reqShiwu()
    if(result.code===0) {
      const shiwu_data = result.data
      commit(RECEIVE_SHIWUDATA,{shiwu_data})
    }
  },
  async getHomeData ({commit}) {
    const result =  await  reqHome()
    if(result.code===0) {
      const home_data = result.data
      commit(RECEIVE_HOMEDATA,{home_data})
    }
  },
}
